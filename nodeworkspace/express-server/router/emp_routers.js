// router/emp_routers.js
const express = require('express');
const router = express.Router();
const { query } = require('../mapper/emp-map.js');

// header(public, 데이터양 제한됨) : get, delete 
// body(private) : post, put

// REST API기반으로 작업 
// 전체조회 : GET + '/emps' 
// 보통 s를 붙임. 자원이 한 건만 있는 경우는 거의 없으니
router.get('/emps', (req, res)=>{ // 경로를 설정하는 부분을 첫번째 매개변수에 둔다 // 라우팅 -> end point
  let list = query('SELECT'); // 라우팅 -> 서비스
  res.send(list); // 라우팅 -> 응답형태
}); 


// 1건 단순조회 : GET + '/emps/100'
router.get('/emps/:empId',(req,res)=>{ // 값을 받는 변수( :empId )
  let searchId = req.params.empId; // 경로에 값이 들어있기 때문에 params를 상용한다
  let info = query('SELECT', null, {id: searchId});
  res.send(info[0]); //배열(속 객체)로 들어와지기 때문에 1건조회는 배열의 인덱스0로 세팅하면 객체로 된다
})

// 등록 : POST + '/emps' + JSON
router.post('/emps', (req, res)=>{
  let addInfo = req.body; // request에 있는 body영역을 가지고 온다
  query('INSERT', addInfo);
  res.send({'result':'success'});
});

// 수정 : PUT + '/emps/100' + JSON
// 100은 프라이머리 키 /emps?userId=100이것처럼 기존 방식으로 하지 않음. 보안에 좋음
// put과 delete는 원칙적으로 1개만 수정 삭제
router.put('/emps/:eid', (req, res)=>{
  let searchId = req.params.eid;
  let updateInfo = req.body;
  query('UPDATE', updateInfo, {id : searchId});
  res.send({'result' : 'success', 'id' : searchId });
});

// 삭제 : DELETE + '/emps/100' 
router.delete('/emps/:empId',(req,res)=>{
  let searchId = req.params.empId; // 경로에 값이 들어있기 때문에 params를 상용한다
  query('DELETE', null, {id: searchId});
  res.status(204).send('Completed'); // 상태코드를 기반으로 응답생성 =>성공으로 인식하는 상태코드값200의 범위가 넓음 204 사용
});

module.exports = router;