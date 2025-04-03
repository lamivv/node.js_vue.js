// router/table_router.js
const express = require('express');
const router = express.Router();
const tableService = require('../service/table_service.js');

// 전체조회
router.get('/board', async (req, res)=>{
  let custList = await tableService.findAll();
  res.send(custList);
});

// 단건조회 
router.get('/board/:bno', async (req, res)=>{
  let BoardNo = req.params.bno;
  let boardInfo = await tableService.findByBno(BoardNo);
  res.send(boardInfo);
});

// 등록
router.post('/board', async (req, res)=>{
  let addBaord = req.body;
  let result = await tableService.addTable(addBaord);
  res.send(result);
});

// 수정
router.put('/board/:bno', async (req, res)=>{
  let bno = req.params.bno;
  let boardUpInfo = req.body;
  let result = await tableService.updateTable(boardUpInfo, bno);
  res.send(result);
});

module.exports = router;