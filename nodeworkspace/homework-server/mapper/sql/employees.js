// 전체조회
const selectAll = 
`SELECT id
    ,first_name
    ,last_name
    ,email
    ,gender
    ,ip_address
FROM employees
ORDER BY id`;

// 단건조회
const selectById =
`SELECT id
    ,first_name
    ,last_name
    ,email
    ,gender
    ,ip_address
FROM employees
WHERE id = ?`; 

// 등록
const insertInfo =
`INSERT INTO employees(first_name, last_name, email, gender, ip_address)
VALUES(?,?,?,?,?)`;

// 수정
const updateInfo = 
`UPDATE employees
SET ?
WHERE id = ?`;

const deleteInfo =
`DELETE FROM employees
WHERE id = ?`;

module.exports = {
  selectAll,
  selectById,
  insertInfo,
  updateInfo,
  deleteInfo
}