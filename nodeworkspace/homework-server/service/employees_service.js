// service/employees_service.js

const mariaDB = require('../mapper/mapper.js');
// 전체조회
const findAll = async ()=> {
  let list = await mariaDB.query('selectAll');
  return list;
}
// 단건조회
const findById = async (empId)=>{ 
  let info = (await mariaDB.query('selectById',empId))[0];
  return info;
}

// 등록
const addEmployee = async (empInfo) => {
  let columnList = ['first_name', 'last_name', 'email', 'gender', 'ip_address'];
  let addInfo = converterAray(empInfo, columnList);
  let result = await mariaDB.query('insertInfo', addInfo);
  return result;
}
// 객채를 배열로 변경
const converterAray = (target, list) => {
  let aray = [];
  for(let field of list){
    let val = target[field];
    aray.push(val);
  }
  return aray;
}
// 수정
const modifyEmployeeInfo = async (empInfo, empId)=>{
  let updateInfo = [empInfo, empId];
  let result = await mariaDB.query('updateInfo', updateInfo);
  return result;
}
// 삭제
const removeEmployeeInfo = async (empId)=>{
  let result = await mariaDB.query('deleteInfo', empId);
  return result;
}
module.exports = {
  findAll,
  findById,
  addEmployee,
  modifyEmployeeInfo,
  removeEmployeeInfo
}