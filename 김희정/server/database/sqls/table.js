// mapper/sql/customer.js
// Table : table;
// 전체조회
const selectAll = 
`SELECT no
		,title
    ,writer
    ,content
    ,created_date
FROM t_board_board
ORDER BY no`;

// 단일조회
const selectByBno = 
`SELECT no
		,title
    ,writer
    ,content
    ,created_date
FROM t_board_board
WHERE no = ?`; // 단일값 // bno

// 게시글등록
const insertTable = 
`INSERT INTO t_board_board(title, writer, content, created_date)
VALUES(?,?,?,?)`; // 배열

// 게시글 수정
const updateInfo =
`UPDATE t_board_board
SET ?
WHERE no =?`; // 배열[객체, 단일값]

module.exports = {
  selectAll, 
  selectByBno, 
  insertTable,
  updateInfo,
}