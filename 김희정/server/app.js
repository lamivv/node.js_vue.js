// app.js
require('dotenv').config({path : './database/dbConfig.env'});
// console.log(process.env);
const express = require('express');
const app = express();
const tableRouter = require('./router/table_router.js');

// 미들웨어
// application/X-www-form-urlencoded
app.use(express.urlencoded({extended : false }));
// application/json
app.use(express.json());

app.listen(3000, ()=>{ // 리슨을 기준으로 위에는 미들웨어 아래는 라우팅 정렬
  console.log('Server Start');
  console.log('http://localhost:3000');
})

// 라우팅
app.get('/',(req, res)=>{
  res.send('Welcome!!');
})

app.use('/', tableRouter);