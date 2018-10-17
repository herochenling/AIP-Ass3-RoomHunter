import mongoose from 'mongoose';

// post scheme
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

/** get post by username */
module.exports.getPostByUsername = function(username, callback) {
    const query = { byUser: username };
    Post.find(query, callback);
};

//search post by price
module.exports.seachPostByPrice = function(price_low, price_high, callback) {
    const query = {
        rent: { $gte: price_low, $lte: price_high }
    };
    Post.find(query, callback);
};

//search post by city
module.exports.seachPostByCity = function(city, callback) {
    console.log(city);
    var query = {};
    if (city != 'all' && city.length > 0) {
        query = {
            city: { $regex: city, $options: '$i' }
        };
    }
    Post.find(query, callback);
};
