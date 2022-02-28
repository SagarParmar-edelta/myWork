const mongoose = require('mongoose');
const con = mongoose.connect('mongodb://localhost/eDelta');
module.exports = { con };
