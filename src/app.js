require ('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
require('./db/conn');
app.use(express.json());

const uploads = path.join(__dirname,"./uploads")

app.use(express.static(uploads));

const userroute = require('./routes/userrouters');
const blogroute = require('./routes/blogroutes');
app.use('/user',userroute);
app.use('/blog',blogroute);
app.listen(port, () => {
    console.log(`runnning at ${port}`);
})