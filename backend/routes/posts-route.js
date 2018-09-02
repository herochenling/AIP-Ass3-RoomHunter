import express from 'express';
import Post from "../models/post";


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
    let post = new Post(req.body);
    post
        .save()
        .then(post => {
            res.status(200).json({ post: "Added successfully!" });
        })
        .catch(err => {
            res.status(400).send("Failed to create new post");
        });
});

// route for delete a post
postRouter.route("/posts/delete/:id").get((req, res) => {
    Post.findByIdAndRemove({ _id: req.params.id }, (err, post) => {
        if (err) res.json(err);
        else res.json("Remove successfully");
    });
});

module.exports = postRouter;