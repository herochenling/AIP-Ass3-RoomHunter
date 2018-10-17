import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// User Schema
const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    posts: [{ _id: mongoose.Schema.Types.ObjectId, default: [] }]
});

const User = (module.exports = mongoose.model('User', UserSchema));

/** get user by id;*/
module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

/** get user by username */
module.exports.getUserByUsername = function(username, callback) {
    const query = { username: username };
    User.findOne(query, callback);
};

/** add post id to posts column when user create a new post */
module.exports.updatePosts = function(username, id, callback) {
    const postId = { _id: id };
    User.findOneAndUpdate(
        { username: username },
        { $push: { posts: postId } },
        callback
    );
};

/** add a new user into database */
module.exports.addUser = function(newUser, callback) {
    // salt and hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

/** compare user entered password to encrypted password stored in the data */
module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};
