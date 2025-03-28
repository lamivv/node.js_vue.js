// mapper/sql/customer.js
// Table : customers;
const selectAll = 
`SELECT id
		,name
    ,email
    ,phone
    ,address
FROM customers
ORDER BY id`;

module.exports = {
  selectAll, 
  // 'selectAll' : selectAll
  // 사용하려는 변수명 : 실제값
}