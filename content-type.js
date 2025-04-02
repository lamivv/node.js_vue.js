/*
Content-type
1) application/x-www-form-urlencoed
- key=value&key=value&...
- QueryString(질의문자열)
- METHOD : 제한없음
=>  URLSearchParams

2) application/json
- 객체 { "key" : "value", ...}
  or 배열 [ {}, {}]
- JSON(Javascript Object Notation)
- METHOD : POST, PUT
=> js 클래스 : JSON

3) multipart/form-data
- 미디어파일 전체
- METHOD : POST, PUT
- 특징) 별도 인코딩 없음
=> js 클래스 : FormData
*/

/*
  content-type       | express
  GET + QueryString  | request.query
  POST + QueryString | request.body
  JSON               | request.body
  -----------------------------------
  경로에 값을 전달   | requset.params ->ex) /emps/100
*/

// 라이브러리 자율성 보장
// 프레임워크 밀키트처럼 만드는 대상이 명확