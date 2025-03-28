// inner_module/04_crypto.js
const crypto = require('crypto');
const data = 'pw1234';
let secret = 'aasfd';
// 보안알고리즘 선택 sha512
// digest 알고리즘 적용하고 나서 그 결과에 출력(몇글자) 64비트로 출력하는 base64
let encData = crypto.createHmac('sha512', secret).update(data).digest('base64');
//let encData = crypto.createHash('sha512').update(data).digest('base64');
console.log(encData);

