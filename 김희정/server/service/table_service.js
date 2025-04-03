// service/table_service.js
const mariaDB = require('../database/mapper.js');

// 전체조회
const findAll = async ()=>{
  let list = await mariaDB.query('selectAll');
  return list;
};
// 단건조회
const findByBno = async (bno)=>{
  let info = (await mariaDB.query('selectByBno', bno))[0];
  return info;
};
// 등록
const addTable = async (info)=>{ // 객체로 받음
  let columnList = ['title', 'writer', 'content', 'created_date'];
  let addBoard = converterAray(info, columnList);
  let result = await mariaDB.query('insertTable',addBoard);
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
const updateTable = async (boardInfo, bno)=>{
  let updateBoard = [boardInfo, bno];
  let result = await mariaDB.query('updateInfo',updateBoard);
  return result;
};

module.exports = {
  findAll,
  findByBno, 
  addTable,
  updateTable,
}