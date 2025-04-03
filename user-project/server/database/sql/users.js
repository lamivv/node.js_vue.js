// users.js
// Table : t_users

// 전체조회
const userList = 
`SELECT user_no, user_id, user_pwd, user_name, user_gender, user_age, join_date
FROM t_users
ORDER BY user_no`;
// 단건조회
const userInfo =
`SELECT user_no, user_id, user_pwd, user_name, user_gender, user_age, join_date
FROM t_users
WHERE user_no = ?`; // 단일값
// 등록
const userInsert =
`INSERT INTO t_users (user_id, user_pwd, user_name, user_gender, user_age)
VALUE (?, ?, ?, ?, ?)`; // 배열
// 수정
const userUpdate =
`UPDATE t_users
SET ?
WHERE user_no = ?`; // 배열 (객체 + 단일값)

module.exports= { 
  userList,
  userInfo,
  userInsert,
  userUpdate
}