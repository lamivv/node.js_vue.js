// service/user_service.js
const mariaDB = require('../database/mapper.js')

// 전체조회
const findAll = async () => {
  let list = await mariaDB.query('userList')
                          .catch(err => console.log(err));
  return list;
};
// 단건조회
const selectInfo = async (userNo) =>{
  let info = await mariaDB.query('userInfo', userNo)
                          .catch(err => console.log(err));
  return info[0];
}
// 등록
const insertInfo = async (userInfo) =>{
  let Info = getInsertInfo(userInfo); // 객체로 받은걸 배열로 변경
  let newInfo = await mariaDB.query('userInsert', Info)
                             .catch(err => console.log(err));
  // return newInfo;
  if (newInfo.insertId > 0){
    return { result : true, user_no : newInfo.insertId };
  } else {
    return { result : false };
  }
}
// 객체로 받은걸 배열로 변경
function getInsertInfo(target) {
  return [
    target.user_id,
    target.user_pwd,
    target.user_name,
    target.user_gender,
    target.user_age
  ];
}

// 수정
const updateInfo = async (newInfo, userId) =>{
  let update = [newInfo, userId];
  let editInfo = await mariaDB.query('userUpdate', update)
                              .catch(err => console.log(err));
  return editInfo;
}

// 외부에서 이 기능을 사용가능 하도록 오픈
module.exports = {
  findAll,
  selectInfo,
  insertInfo,
  updateInfo
};