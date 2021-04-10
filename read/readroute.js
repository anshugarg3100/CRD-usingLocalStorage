const express = require('express');
const app = express();
const path = require('path');




app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/read.html'));
});
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/read.js'));
});

module.exports=app;