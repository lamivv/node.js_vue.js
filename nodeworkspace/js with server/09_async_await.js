// js with server/09_async_await.js
function webServerConnect() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}

// async await비동기 작업을 순차적으로 진행하고자 할 때 사용 
async function getJSONData(){ //실행함수 앞에 async 
  const result = await webServerConnect(); // 비동기 작업 앞에 await
  console.log(1,result);

  // webServerConnect()
  // .then(result => console.log(2,result));
}

getJSONData();
console.log('End!');