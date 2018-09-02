import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Post from "./models/post";

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// database configuration
mongoose.connect("mongodb://127.0.0.1:27017/roomhunter");
const connection = mongoose.connection;
connection.once("open", () => { // check if database is connected
  console.log("MongoDB database connection established successfully");
});

// route for getting all the posts
router.route("/posts").get((req, res) => {
  Post.find((err, posts) => {
    if (err) console.log(err);
    else res.json(posts);
  });
});

//route for get a post by its id
router.route("/posts/:id").get((req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) console.log(err);
    else res.json(post);
  });
});

// route for add a new post
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

// route for delete a post
router.route("/posts/delete/:id").get((req, res) => {
  Post.findByIdAndRemove({ _id: req.params.id }, (err, post) => {
    if (err) res.json(err);
    else res.json("Remove successfully");
  });
});

app.use("/", router);

// check if server is running
app.listen(4000, () => console.log("Express server running on port 4000..."));
