const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
const uSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        unique:true
    },
    password: {
        type: String,
    }
  })

const User = new mongoose.model('User', uSchema);
module.exports = User;