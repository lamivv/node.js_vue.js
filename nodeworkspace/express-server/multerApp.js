// multerApp.js

const multer = require('multer');
const path = require('path');
const cors = require('cors');

const express = require('express');
const app = express();
app.use(cors());
// 파일 저장 경로만 설정하면 파일 덮어쓰는것을 해결할 수가 없음
const storage = multer.diskStorage({ // 아무런 설정을 하지 않으면 메모리RAM에 올라가서 저장이 안되고 진행이된다
  destination : function(req, file, cb){ // 저장하는 경로를 담당
    cb(null, 'uploads/');
  },
  filename : function(req, file, cb){
    let saveFile = (new Date()).valueOf() + path.basename(file.originalname);
    cb(null, saveFile);
  }
});

const upload = multer({storage : storage});

app.listen(5000, ()=>{
  console.log('Server Start');
  console.log('http://localhost:5000')
})

// 싱글업로드 예시) 프로필이미지
app.post('/profile', upload.single('avatar'), (req, res)=> { // uri와 핸들러 사이에 미들웨어, 미들웨어가 먼저 돌고 핸들러를 통해 접속이 가능해짐 avatar를 키값으로 미디어파일을 처리함
  console.log(req.file);
  console.log(req.body); // body는 필요에 따라서 사용
});

app.post('/photos', upload.array('photos',8), (req,res)=>{ // any는 제한없이 받아들임(비권장), array는 제한걸어서 받아들임(권장)
  for (let file of req.files){
    console.log(file);
  }
}) 