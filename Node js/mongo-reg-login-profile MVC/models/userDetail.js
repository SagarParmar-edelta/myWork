const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    city: {
        type: String,
    },
    pincode: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
});
const UserDetail = mongoose.model('UserDetail', userDetailsSchema);
module.exports = UserDetail;
