import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import User from '../models/user';
import config from '../config/db';

const userRouter = express.Router();

// register
userRouter.post('/register', (req, res, next) => {
    // create a new user by using data form the request body
    let newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    // make sure input fields are not empty
    if (
        newUser.email == undefined ||
        newUser.password == undefined ||
        newUser.username == undefined
    ) {
        return res.json({ success: false, msg: 'Please fill in all fields!' });
    }
    // validate email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(newUser.email).toLowerCase())) {
        return res.json({
            success: false,
            msg: 'Please enter a valid email! '
        });
    }

    // check if username already in the database. If not exists, add this new user to the database
    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) {
            return res.json({ success: false, msg: err });
        }
        if (user) {
            return res.json({
                success: false,
                msg: 'Username is already taken! Please try again! '
            });
        } else {
            User.addUser(newUser, (err, user) => {
                if (err) {
                    return res.json({
                        success: false,
                        msg: 'Failed to register user, please try again!'
                    });
                } else {
                    return res.json({
                        success: true,
                        msg:
                            'Register successfully! We will direct you to Login page now'
                    });
                }
            });
        }
    });
});

//Authenticate
userRouter.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    //check if input is empty
    if (username == undefined)
        return res.json({ success: false, msg: "Username can't be empty!" });
    if (password == undefined)
        return res.json({ success: false, msg: "Password can't be empty!" });

    //get user by username
    User.getUserByUsername(username, (err, user) => {
        if (err) {
            return res.json({ success: false, msg: err });
        }
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }
        // for found user, comparing its password to the encrypted password in the database
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                //generate token for user with correct password
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 3600 // 1 hour
                });
                // send response in jason format
                res.json({
                    success: true,
                    msg: 'You are now logged in !!',
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        posts: user.posts
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});

//profile
userRouter.get(
    '/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        res.json({ user: req.user });
    }
);

module.exports = userRouter;
