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
postRouter.route('/').get((req, res) => {
    Post.getAllPosts((err, posts) => {
        if (err) console.log(err);
        else res.json(posts);
    })
})


/**
 * route for get a post by its id
 */
postRouter.route('/:id').get((req, res) => {
    Post.getPostById(req.params.id, (err, post) => {
        if (err) console.log(err);
        else res.json(post);
    });
});


/**
 * route for get posts by username
 */
postRouter.route('/user/:username').get((req, res) => {
    Post.getPostByUsername(req.params.username, (err, post) => {
        if (err) {
            console.log(err);
            res.send(401);
        } else res.json(post);
    });
});


/**
 * route for searching post by price
 */
postRouter.route('/search/price/:price_low/:price_high').get((req, res) => {
    var price_low = req.params.price_low;
    if (price_low == null || price_low == undefined) price_low = 0;
    var price_high = req.params.price_high;
    if (price_high == null || price_high == undefined) price_high = 0;
    price_low = parseInt(price_low);
    price_high = parseInt(price_high);
    Post.seachPostByPrice(price_low, price_high, function (err, post) {
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
postRouter.route('/search/city/:city').get((req, res) => {
    var city = req.params.city;
    Post.seachPostByCity(city, (err, post) => {
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
postRouter.route('/add').post((req, res) => {
    // create a new post by using data form the request body
    console.log(req.body);
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

    //save new post to database and add posts id to user posts column
    Post.addPost(newPost, (err, post) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to create new post', log: err });
        } else {
            User.updatePosts(newPost.byUser, newPost._id, err => {
                if (err) {
                    console.log(err);
                    res.json({ success: false, msg: 'Failed to add postid in the user posts column' });
                }
            });
            res.json({ success: true, msg: 'Create the post successfully!' });
        }
    });
});


/**
 * route for delete a post
 */
postRouter.route('/delete/:id').get((req, res) => {
    Post.deletePostById(req.params.id, (err, post) => {
        if (err) res.json({ success: false, msg: 'Failed to delete post', log: err });
        else res.json({ success: true, msg: 'Remove successfully' });
    });
});


/**
 * route for image upload
 */
postRouter.route('/upload').post((req, res) => {
    // upload path for image
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
    var displayUrl; // the image url

    //parse image file, create and send image display url
    form.parse(req, function (err, fields, files) {
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }

        //get file extension info
        var fileExtension = '';
        switch (files.file.type) {
            case 'image/pjpeg':
                fileExtension = 'jpg';
                break;
            case 'image/jpeg':
                fileExtension = 'jpg';
                break;
            case 'image/png':
                fileExtension = 'png';
                break;
            case 'image/x-png':
                fileExtension = 'png';
                break;
        }
        if (fileExtension.length === 0) {
            res.send({ code: 202, success: false, msg: 'Image type is invalid!' });
        } else {
            var avatarName = '/' + Date.now() + '.' + fileExtension;
            var newPath = form.uploadDir + avatarName;
            displayUrl = '/upload' + avatarName;
            //rename file path to new path
            fs.renameSync(files.file.path, newPath);
            // send image display url
            res.json({ code: 200, success: true, data: displayUrl, msg: 'Upload succeed' });
        }
    });
});
module.exports = postRouter;
