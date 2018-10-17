import mongoose from 'mongoose';

/** post schem */
let PostSchema = new mongoose.Schema({
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
    description: String,
    houseImage: String
});
const Post = (module.exports = mongoose.model('Post', PostSchema));

/** get all posts */
module.exports.getAllPosts = function (callback) {
    Post.find(callback);
};

/** get post by id */
module.exports.getPostById = function (id, callback) {
    Post.findById(id, callback);
};

/** get post by username */
module.exports.getPostByUsername = function (username, callback) {
    const query = { byUser: username };
    Post.find(query, callback);
};

/** search post by price */
module.exports.seachPostByPrice = function (price_low, price_high, callback) {
    const query = { rent: { $gte: price_low, $lte: price_high } };
    Post.find(query, callback);
};

/** search post by city */
module.exports.seachPostByCity = function (city, callback) {
    console.log(city);
    var query = {};
    if (city != 'all' && city.length > 0) {
        query = { city: { $regex: city, $options: '$i' } };
    }
    Post.find(query, callback);
};

/** Add a post */
module.exports.addPost = function (newPost, callback) {
    newPost.save(callback);
};

/** delete post */
module.exports.deletePostById = function (id, callback) {
    const query = { _id: id }
    Post.findByIdAndRemove(query, callback);
};