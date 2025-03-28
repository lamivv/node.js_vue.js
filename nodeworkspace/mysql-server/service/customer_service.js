// service/customer_service.js
// 클라이언트 요청에 따라서 자신이 실행해야하는 비즈니스를 실행하고 클라이언트에 넘겨주는 역할을 함
// Business 실제로 기능 수행
const mariaDB = require('../mapper/mapper.js');
// 전체조회
const findAll = async ()=>{
  let list = await mariaDB.query('selectAll');
  return list;
};
// 단건조회
const findById = async (custId)=>{
  let info = (await mariaDB.query('selectById', custId))[0];
  return info;
};
// 등록
const addCustomer = async (custInfo)=>{ // 객체로 받음
  let columnList = ['name', 'email', 'phone', 'address'];
  let addInfo = converterAray(custInfo, columnList);
  let result = await mariaDB.query('insertInfo',addInfo);
  return result;
};
// 객체 => 배열
const converterAray = (target, list) => {
  let aray = [];
  for(let field of list){
    let val = target[field];
    aray.push(val);
  }
  return aray;
}
// 수정
const modifyCustomerInfo = async (custInfo, custId)=>{
  let updateInfo = [custInfo, custId];
  let result = await mariaDB.query('updateInfo',updateInfo);
  return result;
};
// 삭제
const removeCustomerInfo = async (custId)=>{
  let result = await mariaDB.query('deleteInfo',custId);
  return result;
};

module.exports = {
  findAll,
  findById, 
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo
}