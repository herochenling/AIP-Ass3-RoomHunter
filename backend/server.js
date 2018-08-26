import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Post from "./models/post";

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/roomhunter");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

router.route("/posts").get((req, res) => {
  Post.find((err, posts) => {
    if (err) console.log(err);
    else res.json(posts);
  });
});

router.route("/posts/:id").get((req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) console.log(err);
    else res.json(post);
  });
});

router.route("/posts/add").post((req, res) => {
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

router.route("/posts/delete/:id").get((req, res) => {
  Post.findByIdAndRemove({ _id: req.params.id }, (err, post) => {
    if (err) res.json(err);
    else res.json("Remove successfully");
  });
});

app.use("/", router);

app.listen(4000, () => console.log("Express server running on port 4000..."));
