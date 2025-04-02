// axios-test/index.js
// node.js 쪽이라서 require로 불러옴
const axios = require('axios'); 

// 전체 조회
// fetch 컨텐트 타입이 다양한 경우 사용하기 좋음
fetch('http://localhost:3000/customers')
.then(res => res.json())
.then(result => {
  console.log('fetch, GET');
  console.log(`\t`,result);
})
.catch(err => console.log(err));

// axios 서버가 돌려주는 값은 JSON
axios('http://localhost:3000/customers')
.then(result => {
  console.log('axios, GET');
  console.log(`\t` ,result.data);
})
.catch(err => console.log(err));

// 단건 조회
axios.get('http://localhost:3000/customers/1')
.then(result => {
  console.log('axios, 단건조회');
  console.log(`\t` ,result.data);
})
.catch(err => console.log(err));

// 등록
let insertInfo = 
{ name: 'jaein',
  email: 'jaein@mail.com',
  phone: '010-1234-0100',
  address: null };

// 1) fetch
fetch('http://localhost:3000/customers', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(insertInfo),
})
.then(res => res.json())
.then(result => {
    console.log('fetch, 등록');
    console.log(`\t`, result); 
})
.catch(err => console.log(err));

// 2) axios.post()
axios.post('http://localhost:3000/customers', insertInfo)
.then(result => {
    console.log('axios, 등록');
    console.log(`\t`, result); 
})
.catch(err => console.log(err));