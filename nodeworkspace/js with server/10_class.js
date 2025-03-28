// js with server/10_class.js

// 1) 생성자 함수 => 함수 이름이 대문자로 시작.. 객체를 생성하는 함수
function User(name, age, city){
  // 필드
  this.name = name; // this는 인스턴스를 가리킴 (생성된 객체로 생각하면 됨)
  this.age = age;
  this.city = city;
  // 메소드
  this.getInfo = function(){
    return `${this.name}, ${this.age}, ${this.city}`;
  }
}

let hong = new User('Hong', 30, 'Daegu'); // new 연산자 사용해서 생성자를 호출하면 비어있는 객체를 먼저 만든다 그 객체를 가리키는 임시 hong에 추가하는식..
console.log(hong.getInfo());

let kim = new User('Kim', 25, 'Jeju'); 
console.log(kim.getInfo());

// class
class Emp {
  // 생성자 (클래스명과 같게 하지 않고 독립된 이름-> constructor사용)
  constructor(id, name, dept){
    // 해당 클래스가 가지는 필드 등록
    this._id = id; // 자바스크립트에는 접근지정자가 없음 (public, private...) 
    this._name = name; // 그래서 언더바를 사용해서 private로 지정하겠다는 것을 의미하는 암묵적 약속/ 임의로 변경하지 않겠다는 약속 
    this._dept = dept; // 물리적으로 private가 되는건 아니고 개발자끼리의 약속
  }

  // get & set 읽을 수 있는지 변경할 수 있는지
  get id(){ // id는 set이 없으니 읽을 수만 있고 변경할 수 없다(접근 제한함) read only
    return this._id;
  }

  set name(name){ // 함수로 사용하는게 아니라 또 하나의 필드로 인식됨
    this._name = name;
  }

  get name(){
    return this._name;
  }

  // 메소드
  setDept(dept){ // 이런 식으로 get & set 를 만드는 경우는 함수로 사용을 함
    this._dept = dept;
  }

  getDept(){
    return this._dept;
  }
}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200;
kang.name = 'King';
kang.setDept('Marketing');
console.log(kang);