// const _app=require('./config.js')
const express=require('express')
const jwt = require('jsonwebtoken');

app=express();

app.get('/',(req,res)=>{
    var user={id:1,user:'sesh'}
    jwt.sign(user,'secret',
    // {expiresIn:10},
    (err,token)=>{
      res.status(200).json(token);
    })
  });
  app.get('/api/:token',(req,res)=>{
    var decoded = jwt.decode(req.params.token);
    if(decoded.exp<Date.now()){
      res.send('Token Expired');
    }
    res.send(decoded);
  })  
  app.listen(process.env.PORT||3000);

  console.log('Application is running on http://localhost:'+ 3000);  