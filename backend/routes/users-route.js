import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../models/user";
import config from "../config/db"

const userRouter = express.Router();

// register
userRouter.post('/register', (req, res, next) => {
    // create a new user by using data form the request body
    let newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

//Authenticate
userRouter.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    //get user by username
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
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
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        posts: user.posts
                    }
                })
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});

//profile
userRouter.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});

module.exports = userRouter;

