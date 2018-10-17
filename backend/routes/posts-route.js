import express from 'express';
import Post from '../models/post';
import User from '../models/user';
import path from 'path';
import formidable from 'formidable'; //for file uploading
import fs from 'fs'; //file system

const postRouter = express.Router();

/**
 * route for get all the posts
 */

postRouter.route('/posts').get((req, res) => {
    Post.find((err, posts) => {
        if (err) console.log(err);
        else res.json(posts);
    });
});

/**
 * route for get a post by its id
 */
postRouter.route('/posts/:id').get((req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err) console.log(err);
        else res.json(post);
    });
});

/**
 * route for get posts by username
 */
postRouter.route('/posts/user/:username').get((req, res) => {
    Post.getPostByUsername(req.params.username, function(err, post) {
        if (err) {
            console.log(err);
            res.send(401);
        } else res.json(post);
    });
});

/**
 * route for searching post by price
 */
postRouter
    .route('/posts/search/price/:price_low/:price_high')
    .get((req, res) => {
        var price_low = req.params.price_low;
        if (price_low == null || price_low == undefined) price_low = 0;
        var price_high = req.params.price_high;
        if (price_high == null || price_high == undefined) price_high = 0;
        price_low = parseInt(price_low);
        price_high = parseInt(price_high);
        Post.seachPostByPrice(price_low, price_high, function(err, post) {
            if (err) {
                console.log(err);
                res.send(401);
            } else if (post) {
                console.log(post);
                res.json({ list: post, total: post.length });
            }
        });
    });

/**
 * route for searching post by city
 */
postRouter.route('/posts/search/city/:city').get((req, res) => {
    var city = req.params.city;
    Post.seachPostByCity(city, function(err, post) {
        if (err) {
            console.log(err);
            res.send(401);
        } else if (post) {
            console.log(post);
            res.json({ list: post, total: post.length });
        }
    });
});

/**
 * route for add a new post
 */

postRouter.route('/posts/add').post((req, res) => {
    // create a new post by using data form the request body
    let newPost = new Post({
        title: req.body.title,
        street: req.body.street,
        suburb: req.body.suburb,
        city: req.body.city,
        state: req.body.state,
        postCode: req.body.postCode,
        roomType: req.body.roomType,
        contactName: req.body.contactName,
        phone: req.body.phone,
        rent: req.body.rent,
        byUser: req.body.byUser,
        postDate: req.body.postDate,
        description: req.body.description,
        houseImage: req.body.houseImage
    });

    //validate post: if post is invalid, stop here and send out error message;
    // if post is valid, then keep running
    const resultMsg = postValidation(newPost);
    if (resultMsg.length != 0) {
        return res.json({ success: false, msg: resultMsg.valueOf() });
    }

    //save  new post to database and add posts id to user posts column
    newPost
        .save()
        .then(newPost => {
            User.updatePosts(newPost.byUser, newPost._id, err => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'Failed to add postid in the user posts column',
                        log: err
                    });
                } else {
                    res.json({ success: true, msg: 'Added successfully!' });
                }
            });
        })
        .catch(err => {
            res.json({
                success: false,
                msg: 'Failed to create new post',
                log: err
            });
        });
});

/**
 * route for delete a post
 */
postRouter.route('/posts/delete/:id').get((req, res) => {
    Post.findByIdAndRemove({ _id: req.params.id }, (err, post) => {
        if (err)
            res.json({ success: true, msg: 'Failed to delete post', log: err });
        else res.json({ success: true, msg: 'Remove successfully' });
    });
});

/**
 * route for image upload
 */

postRouter.route('/posts/upload').post((req, res) => {
    //mkdir upload path
    var userDirPath = 'public/upload/';
    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }
    //create formidable form
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8'; //encoding format
    form.uploadDir = userDirPath; //file upload dir
    form.keepExtensions = true;
    form.maxFieldsSize = 10 * 1024 * 1024; //file size should be not more than 10M
    form.type = true;
    var displayUrl;

    //parse file and get file info
    form.parse(req, function(err, fields, files) {
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }
        var extName = '';
        //get ext name info
        switch (files.file.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if (extName.length === 0) {
            res.send({
                code: 202,
                msg: 'image type invalid!'
            });
        } else {
            var avatarName = '/' + Date.now() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            displayUrl = '/upload' + avatarName;
            //rename file path to new path
            fs.renameSync(files.file.path, newPath);
            res.json({
                code: 200,
                data: displayUrl,
                msg: 'upload succeed'
            });
        }
    });
});

/**
 * post validation
 */
function postValidation(post) {
    const message = [];

    //check title length
    const titleLength = post.title.length;
    if (titleLength < 10 || titleLength > 100) {
        message.push(
            '* Title length should between 10 characters and 100 characters!'
        );
    }

    //check rent
    const rentReg = /^[0-9]+.?[0-9]*$/;
    if (!rentReg.test(post.rent)) {
        message.push('* Rent should be postive number!');
    }

    //check post code
    const postCodeReg = /^[a-z0-9]+.*$/;
    if (!postCodeReg.test()) {
        message.push('* PostCode format invalid! ');
    }
    //check description length
    const descLength = post.description.length;
    if (descLength > 1000) {
        message.push('* The maximum length of description is 1000! ');
    }

    //check phone
    const reg = /^[0-9]{10,10}$/;
    if (!reg.test(post.phone)) {
        message.push('* Phone should contail 10 numbers! ');
    }

    //check house image
    const houseImage = post.houseImage;
    if (houseImage.lengh == 0) {
        message.push('* The house image should be valid! ');
    }
    return message;
}

module.exports = postRouter;
