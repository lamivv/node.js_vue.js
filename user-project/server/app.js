// app.js
require('dotenv').config({path : './database/dbConfig.env'});
const express = require('express');
const app = express();
// 별도의 파일을 기반으로 회원관리 
const userRouter = require('./router/user_router.js'); 

// 미들웨어(서버를 만들 때 구조적인 부분. 선택사항)
// 컨텐트 타입을 서버가 사용할 수있도록 parse를 설정
// application/x-www.form-urlencoded
app.use(express.urlencoded({ extended : false}));
// application/json
app.use(express.json());


app.listen(3000, ()=>{
  console.log('Server Start!');
  console.log('http://localhost:3000');
})

// 라우팅
// 서버 실행하면 가장 먼저 실행되는 루트
app.get('/', (req, res)=>{
  res.send('Welcome!');
})

app.use('/', userRouter); // 서버에 등록