const User = require('../models/userschema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const newuser = async(req,res) =>{
  try {
      const data = new User(req.body);
        let hash = await bcrypt.hash(data.password, 10);
        data.password = hash;
        const user = await data.save();
      console.log(user);
      res.send(user);
  } catch (error) {
      console.log(error);
      res.send(error);
  }
}
const login = async(req,res)=>{
  try {
    const {username,password} = req.body;
      const user = await User.findOne({username});
        let match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = jwt.sign(
            { id: user._id,},
            process.env.skey,
            {
              expiresIn: "2h",
            }
          )
          res.status(200).json({
            token:token
          })
        } else {
          res.send('invalid password')
        }
  }catch (error) {
      console.log(error);
      res.send(error);
  }
}

module.exports = {newuser,login}
