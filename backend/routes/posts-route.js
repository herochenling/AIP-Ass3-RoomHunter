import express from 'express';
import Post from "../models/post";
import User from "../models/user";


const postRouter = express.Router();

// route for getting all the posts
postRouter.route("/posts").get((req, res) => {
    Post.find((err, posts) => {
        if (err) console.log(err);
        else res.json(posts);
    });
});

//route for get a post by its id
postRouter.route("/posts/:id").get((req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err) console.log(err);
        else res.json(post);
    });
});

// route for add a new post
postRouter.route("/posts/add").post((req, res) => {
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
        description: req.body.description
    });

    newPost
        .save()
        .then(newPost => {
            User.updatePosts(newPost.byUser, newPost._id, (err) => {
                if (err) {
                    res.json({ success: false, msg: "Failed to add postid in the user posts column", log: err })
                } else {
                    res.json({ success: true, msg: "Added successfully!" });
                }
            })
        })
        .catch(err => {
            res.json({ success: false, msg: "Failed to create new post", log: err });
        });
});

// route for delete a post
postRouter.route("/posts/delete/:id").get((req, res) => {
    Post.findByIdAndRemove({ _id: req.params.id }, (err, post) => {
        if (err) res.json({ success: true, msg: "Failed to delete post", log: err });
        else res.json({ success: true, msg: "Remove successfully" });
    });
});

module.exports = postRouter;