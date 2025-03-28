// middleApp.js
const express = require('express');
const app = express();
const cors = require('cors');

// 미들웨어 등록
const session = require('express-session');

let sessiontSetting = session({
  secret : 'eogksalsrnr',
  resave : false, // 변경사항이 있는지 없는지에 따른 저장 여부
  saveUninitialized : true, 
  cookie : {
    httpOnly : true,
    secure : false,
    maxAge : 60000
  }
});

app.use(sessiontSetting);

app.use(express.json());

// CORS 설정
// 1) 모든 origin과 모든 요청에 응답 (same origin policy를 모두 무효화 / 서버보안 매우 약해짐)
app.use(cors());

// 2) 지정한 요청에 대해서만 응답 (초대장)
const corsOption = {
  origin : 'http://192.168.0.40:5500',
  optionSuccessStatus : 200,
}
app.use(cors(corsOption));

app.listen(3000, ()=>{
  console.log('http://localhost:3000')
})

app.post('/login', (req, res)=>{
  const { id, pwd } = req.body; // 오브젝트 디스트럭쳐
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save(function(err){ // save의 디폴트는 비동기임 그래서 에러가 넘어오면 매개변수로 에러받음 정상되면 매개변수안받음
    if(err) throw err;
    // res.redirect('/');
    res.send(req.session);
  })
})

app.get('/', (req, res)=>{
  res.send(req.session);
  //res.send(req.session.user); 세션중 원하는 정보만 들고올때
})

app.get('/logout',(req, res)=>{
  req.session.destroy();
  res.redirect('/');
})