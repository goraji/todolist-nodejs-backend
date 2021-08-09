const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
const blogSchema = new mongoose.Schema({
  username:{
    type:String
  },
    author:{
      type: String
    },
    title: {
        type: String
    },
    detail: {
        type: String,
    },
    photo:{
      type:String
    }
  })

const Blog = new mongoose.model('Blog', blogSchema);
module.exports = Blog;