import mongoose from "mongoose";

// post scheme
const Schema = mongoose.Schema;
let Post = new Schema({
  title: String,
  street: String,
  suburb: String,
  city: String,
  state: String,
  postCode: String,
  roomType: String,
  contactName: String,
  phone: String,
  rent: Number,
  byUser: String,
  postDate: String,
  description: String
});

export default mongoose.model("Post", Post);
