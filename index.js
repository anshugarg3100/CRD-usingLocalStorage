const express = require('express');
const app = express();
const path = require('path');
const readroute = require('./read/readroute')

app.use('/read',readroute);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/data.js'));
});

app.listen(3000); 