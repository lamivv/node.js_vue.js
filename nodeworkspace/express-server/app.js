// express-server/app.js
const express = require('express');
const app = express();
const { query } = require('./mapper/emp-map.js');

app.listen(5000, ()=>{
  console.log('Server Start!');
  console.log('http://localhost:5000');
  // localhost => 127.0.0.1
});

/*
  content-type       | express
  GET + QueryString  | request.query
  POST + QueryString | request.body
  JSON               | request.body
  -----------------------------------
  경로에 값을 전달   | requset.params ->ex) /emps/100
*/

// 미들웨어 등록(서버를 동작시킬때 여러 보조기능을 독립된 형태로 구성-선택사항. 필요할때 꺼내씀)
// application/x-www-form-urlencoded
// 미들웨어 등록할 때는 use를 사용한다
app.use(express.urlencoded({extended : false})); // 옵션 : extended 중첩문제에 대해 가장 기본적인 형태만 처리하도록 세팅
// limit라는 설정도 있는데 크기 제한을 거는 것임. 그 외의 옵션도 다양하게 있음
// extended설정은 확장임. false는 1번구조만 허용, true는 2번구조까지 허용한다는말 // false는 가벼움
// 1번구조 : 일반 객체는 { "id" : "H" , "pwd" : "1234" } 하나의 필드가 하나의 값을 가지는게 일반적
// => id=H&pwd=1234
// 2번구조 : { "no" : 1 , "list" : [ 1, 2, 3 ], "writer" : { "id" : "H" , "pwd" : "1234" } } 필드가 가질수 있는 값은 필요에 따라서 배열과 객체를 가질 수 있다
// => no=1&list[0]=1&list[1]=2&list[2]=3&writer[id]=h&writer[pwd]=1234  => 구조가 복잡해짐

// application/json
app.use(express.json());
// 파싱 = 번역 , http는 텍스트기반으로 주고받음. 그러나 다양한 형태로 넘어오지만 스트링임  값을 받았을때는 문자.  그거를 자바나 자바스크립트의 실제 데이터로 하려면 변환하는 과정이 필요헌데 그걸 파싱이라고함
// 우리가 보낼땐 배열로 보냈는데 http기반으로 주고받기 때문에 받는건 무조건 텍스트 기반임 . 그래서 서버는 실제 배열,객체,값으로 인지하는 과정이 필요함 그 과정을 파스prase라고 함
// let result = '[1,2,3]';
// JSON.parse(result);

const empRouter = require('./router/emp_routers.js');
app.use('/',empRouter);

// Error handler
app.use(function(err, req, res, next){ // 첫 번째 매개변수가 에러. 에러가 나면 함수가 동작함
  // 응답 개체에 서버에 발생한 코드 500이면 코드뿐만아니라 에러메세지를 같이 넘기는 것
  res.status(500).json({statusCode: res.statusCode, errMessage : err.message});
  // res.status(500).sendFile('error.html');  
});

app.get('/error', (req,res,next)=>{
  next(new Error('Process Fail! Check Data!'));
});

// 정적파일(css, html, js, image 등)처리
// app.use(express.static('./fruits')); // fruits가 루트가 되어서 apple.jpg로 해도 fruits/apple.jpg로 접근
app.use('/img', express.static('./fruits')); // 마운트경로=> 루트기반 접근이 안되고 /img/apple.jpg 마운트경로로 접근
