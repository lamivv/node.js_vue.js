// js with server/07_parameter.js
// 1) Default parameter
function say(message){
  let msg = (message == undefined ? '매개변수가 넘어오지 않았습니다.' : message);
  console.log(msg);
}
say('Hello!!');
say();

function msg(message = '매개변수가 넘어오지 않았습니다.'){
  console.log(message);
}
msg('Hello!!');
msg();

// 2) Rest parameter
const plus = function(x, y, ...rests) {
  let result = x + y;
  for (let rest of rests){
    result += rest;
  }
  return result;
}

console.log(plus(1,2)); // 3
console.log(plus(1,2,3,4,5)); // 15
console.log(plus(1,2,3,4,5,6,7,8,9,10)); // 55

// 기본 for문
// for(let i = 0; i < 5; i++)

// for of 배열의 길이(length) 만큼만 반복
// for(let val of array){ }

// for in 객체 반복문? 객체를 기준으로 동작하는 반복문, 필드명을 순환하는 반복문
// for(let fieldName in obj){ } 

// 객체의 데이터에 접근하는 방법 1. 점표기법, 2. 대괄호표기법
// 2. 객체이름['key'] 키에대한 값이 출력됨