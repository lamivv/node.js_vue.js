/*
Content-type
1) application/x-www-form-urlencoed
- key=value&key=value&...
- QueryString(질의문자열)
- METHOD : 제한없음

2) application/json
- 객체 { "key" : "value", ...}
  or 배열 [ {}, {}]
- JSON(Javascript Object Notation)
- METHOD : POST, PUT

3) multipart/form-data
- 미디어파일 전체
- METHOD : POST, PUT
- 특징) 별도 인코딩 없음
*/

/*
  content-type       | express
  GET + QueryString  | request.query
  POST + QueryString | request.body
  JSON               | request.body
  -----------------------------------
  경로에 값을 전달   | requset.params ->ex) /emps/100
*/