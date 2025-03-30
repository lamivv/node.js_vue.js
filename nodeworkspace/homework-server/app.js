// app.js
require('dotenv').config({path : './mapper/dbConfig.env'});
const express = require('express');
const app = express();
const custRouter = require('./router/employees_router.js');

// 미들웨어
app.use(express.urlencoded({extended : false }));
app.use(express.json());

app.listen(5000, ()=>{
  console.log('Server Start!');
  console.log('http://localhost:5000');
})

// 라우팅
app.get('/',(req, res)=>{
  res.send('Welcome!!');
})

app.use('/', custRouter);