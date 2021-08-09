const express = require('express');
const router = new express.Router();
const bfxn = require('../controllers/blogcontroller');
const jwtauth = require('../middleware/jwtauth');

var multer = require('multer');
const fileFilter = (req,file,cb)=>{
  if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg'){
    cb(null,true);
  }else{
    cb(null,false);
  }
}
var storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    return cb(null, Date.now()+'-' +file.originalname )
  }
});
var upload = multer({ storage: storage,
  limits:{
  fileSize: 1024*1024*10
  },
  fileFilter: fileFilter
});
router.post('/',jwtauth.verifyToken,upload.single('photo'),bfxn.newblog);

router.get('/',jwtauth.verifyToken, bfxn.allblog);

router.patch('/',jwtauth.verifyToken,upload.single('photo'),bfxn.updateBlog);

router.delete('/',jwtauth.verifyToken,bfxn.deleteblog);
router.delete('/all',jwtauth.verifyToken,bfxn.deleteallblog);

module.exports = router;