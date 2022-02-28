const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 10,
        max: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: {
        street: String,
        city: String,
        pincode: Number,
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
