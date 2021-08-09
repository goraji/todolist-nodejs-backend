const Blog = require('../models/blogschema');
const User = require('../models/userschema')

const newblog = async(req,res) =>{
  try {
      const data = new Blog(req.body);
      const _id = req.user;
      const user1 = await User.findOne({_id});
      data.username = user1.username;
      data.photo = req.file.filename;
      const user = await data.save();
      console.log(user);
      res.send(user);
  } catch (error) {
      console.log(error);
      res.send(error);
  }
}

const allblog = async(req,res) =>{
  try {
      const _id = req.user;
      const user1 = await User.findOne({_id});
      const username = user1.username;
      const data = await Blog.find({username});
      console.log(data);
      res.send(data);
  } catch (error) {
      console.log(error);
      res.send(error);
  }
}

const updateBlog = async(req,res)=>{
  try {
    // let id = req.user;
    let blogid = req.body.blogid;
    const user = await Blog.findOneAndUpdate({_id:blogid},req.body,{new:true});
    res.send(user);
  }catch(err){
    console.log(err);
    res.send(err);
  }
}
const deleteblog = async(req,res)=>{
  try {
    let blogid = req.body.blogid;
    let user = await Blog.findByIdAndDelete({_id:blogid});
    res.json({
      data:user
    })
  } catch (error) {
    console.log(error);
    res.json({
      msg:error
    })
  }
}
const deleteallblog = async(req,res)=>{
  try {
    let _id = req.user;
    const user1 = await User.findOne({_id});
    const username = user1.username;
    let user = await Blog.deleteMany({username});
    res.json({
      data:user
    })
  } catch (error) {
    console.log(error);
    res.json({
      msg:error
    })
  }
}


module.exports = {newblog,allblog,updateBlog,deleteblog,deleteallblog};