// inner_module/02_timer.js

// 첫 번째는 작업(콜백형태), 두 번째는 딜레이를 걸고싶은 시간 혹은 주기 (단위는 밀리세컨드초 ... 1초 = 1000)
function showTime(){
  let today = new Date();
  console.log(today.toLocaleTimeString());
}

showTime();
const timeout = setTimeout(()=>{
  showTime();
}, 2000); 

let count = 0;
const interval = setInterval(()=>{
  showTime();
  console.log('interval %d', count++);
  if (count == 2){ // 2번 반복하고 정지하려고 하는 것
    clearInterval(interval);
  }
}, 1000); // 1초를 주기로 반복

console.log('End!');

