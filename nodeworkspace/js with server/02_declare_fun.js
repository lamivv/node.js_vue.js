// js with server/02_declare_fun.js

// 1) 함수 선언문 (function을 사용하면..) => 변수를 선언함에 있어서 var와 같은 특징
// 아래에 선언
// 마지막에 선언한 함수로 실행된다 (덮어쓰기)
/* 함수 호이스팅
var plus = function(x, y, z){
  return (x+y+z);
}
*/
let result = plus(1,2);
console.log(result);

function plus(x, y) {
  return (x + y);
}

function plus(x, y, z) {
  return (x + y + z);
}

// 2) 함수 표현식 => let, const방식으로 중복을 방어. 다른사람이 동일한 이름을 사용하면 컴파일러에러 발생
// 위에 선언
const printMsg = function(keyword){
  return "result : " + keyword;
}

// 3) 화살표 함수 : ()=>{}
// 3-1) 기본적으로 익명함수이다
let aray =[1,2,3,4,5];
aray.forEach(val => console.log(val));

// 고차함수
const highFun = function(num){
  return (x) => {
    return x+num;
  }
}

const addNum = highFun(10);
result = addNum(5);
console.log(result);

// 3-2) 화살표 함수 + 함수표현식
// const multi: (x: AnalyserNode, y:any) => number
const multi = (x,y) => x * y;
console.log(multi(2,4));