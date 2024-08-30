const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userScheam = new Schema({
    name: { type: String, required: true, min: 1, max: 20 },
    email: { type: String },
    password: { type: String, required: true }
})

module.exports = mongoose.model('user', userScheam);