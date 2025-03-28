const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.json'); // data.json 에 접속하는 절대경로 생성

// DB 설정
const jsonFile = fs.readFileSync(filePath); // jsonData를 실행하기위해 비동기방식으로 하면 안됨. 그래서 Sync써서 동기방식으로 변경
// jsonFile은 문자열로 받아서 아래처럼 JSON타입으로 변경해주어야함
const jsonData = JSON.parse(jsonFile); // JSON -> javascript object or array 

const query = (crud, target, where = null)=>{
  let result = null;

  let emps = jsonData;
  switch(crud){
  // 조회
  case 'SELECT' :
    result = (where == null) ? emps :  emps.filter(emp => {
      return findEmp(emp, where);
    });
    break;  

  // 등록
  case 'INSERT' :
    emps.push(target);
    break;
  // 수정
  case 'UPDATE' :
    emps.forEach(emp => {
      if(findEmp(emp, where)){
        for(let field in target){
          emp[field] = target[field];
        }
      }
    });
    break;
  // 삭제
  case 'DELETE' :
    let selected = null;
    emps.forEach((emp, idx) => {
      if(findEmp(emp, where)){
        selected = idx;
      }
    });

    emps.splice(selected, 1);
    break;
  }
  return result;
};

function findEmp(emp, where){
  let fieldNum = 0; // 총 검색조건 갯수
  let selected = 0; // true인 검색조건 갯수

  for(let field in where){
    fieldNum++;
    if(emp[field] == where[field]){
      selected++;
    }
  }
  return (fieldNum == selected);
}

module.exports = { 
  query,
}