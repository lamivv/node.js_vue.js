// router/user_router.js
// 라우터 모듈
const express = require('express');
const router = express.Router();
// 라우팅 = 사용자의 요청(URL+METHOD) + Service + view
const userService = require('../service/user_service.js');

// 전체 조회
router.get('/users', async (req, res)=>{
  let list = await userService.findAll();
  res.send(list);
});
// 단건 조회
router.get('/users/:id', async (req, res)=>{
  let userNo = req.params.id;
  let selectInfo = await userService.selectInfo(userNo);
  res.send(selectInfo);
})
// 등록
router.post('/users', async (req, res)=>{
  let newInfo = req.body;
  let insertInfo = await userService.insertInfo(newInfo);
  res.send(insertInfo);
})
// 수정
router.put('/users/:id', async (req, res)=>{
  let userId = req.params.id;
  let newInfo = req.body;
  let updateInfo = await userService.updateInfo(newInfo,userId);
  res.send(updateInfo);
})

module.exports = router;