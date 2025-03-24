// js with server/04_filter_map.js
let persons = [ // 배열
  { // 객체
    name : "유재석",
    point : 78,
    city : "서울"
  },
  {
    name : "김종국",
    point : 92,
    city : "서울"
  },
  {
    name : "양세찬",
    point : 76,
    city : "제주"
  },
  {
    name : "하하",
    point : 81,
    city : "서울"
  }
]

// filter 
// 1) 점수가 80점 이상인 사람들만 따로 배열생성
// filter 데이터의 갯수가 줄어들 수 있음
let scores = persons.filter(function(val, idx){
  return val.point >= 80; // boolean 타입 (true만 scores에 새로 배열 생성)
});
console.log(scores);
// PS) 객체배열일 경우 새로운 배열과 원본배열 둘다 데이터 변경 발생
// filter로 생성된 배열의 값을 변경하면 원본의 배열도 변경될 수 있다(참조)
scores[0].name = "강호동";
console.log(scores);
console.log(persons);

// map
// 2) 각 사람들 별로 no를 추가
let newList = persons.map(function(value, index){
  return { // 객체를 생성 -> 원본의 데이터를 사용하지만 객체를 완전히 새로 구성(참조가 아님)
    no : ((index + 1) * 100),
    name : value.name,
    city : value.city
  }
});
console.log(newList);
// PS)
newList[0].name = "홍길동";
console.log(newList);
console.log(persons);