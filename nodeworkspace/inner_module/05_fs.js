// inner_module/05_fs.js
const fs = require('fs');

const data = 'Hello, World!!';

// latin1은 인코딩... utf8처럼 (파일경로(상대경로),작성내용, 저장방법-인코딩, 비동기라서 - > 콜백형태) write의 매개변수는 err밖에 올 수없다 -> 제대로 처리되었는지는 매개변수의 유무에 따라서 판단.
fs.writeFile('./sample.txt', data, 'latin1',(err)=>{
  if(err){
    throw err;
  }
  console.log('파일쓰기 완료!');
})

fs.readFile('./sample.txt', 'utf-8', (err, result)=>{ // (지정된경로의 데이터를 읽어들임, 사람언어로 번역 인코딩, 결과는 콜백함수-> 읽어들인 결과는 두번째 매개변수 result, 읽어들이다가 통신이끊기거나 문제가 생기면 result는 없고 err매개변수가 들어온다)
  if(err) throw err;
  console.log(result);
});