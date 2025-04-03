<!-- views/CustomerAdd.vue -->
<template>
  <div class="container">
    <div class="row">
      <label>No.</label>
      <input type="text" v-model="tableInfo.no" readonly>
    </div>
    <div class="row">
      <label>제목</label>
      <input type="text" v-model="tableInfo.title">
    </div>
    <div class="row">
      <label>작성자</label>
      <input type="text" v-model="tableInfo.writer">
    </div>
    <div class="row">
      <label>내용</label>
      <input type="text" v-model="tableInfo.content">
    </div>
    <div class="row">
      <label>작성일자</label>
      <!-- <input type="text" v-model="tableInfo.created_date" readonly> -->
      <input type="text" v-model="tableInfo.created_date" readonly>
    </div>
    <div>
      <br>
      <button class="btn btn-info" v-on:click="addBoard()">  
        저장
      </button>
    </div>
  </div>
  </template>
  <script>
  import axios from 'axios'
  export default{
    data(){
      return{
        tableInfo : {
          no : null,
          title : null,
          writer : null,
          content : null,
          created_date : '2025-04-03'
        }
      }
    },
    computed : {

    },
    methods : {
      async addBoard() { 
        let ajaxRes = await axios.post(`/api/board`, this.tableInfo) 
                                 .catch(err => console.log(err));
        let sqlRes = ajaxRes.data;
        let boardNo = sqlRes.insertId;
        if ( boardNo > 0 ){
          alert('정상적으로 등록되었습니다.');
          this.$router.push({ name : 'boardInfo', query : { bno : boardNo }});
        } else {
          alert('정상적으로 등록되지 않았습니다.');
        }
      },
      dateFormat(value, format){
        let date = (value == null) ? new Date() : new Date(value);
        let year = date.getFullYear();
        let month = ('0'+ (date.getMonth() +1)).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);
        let result = format.replace('yyyy', year).replace('MM', month).replace('dd',day);
        return result;
      },
    }
  }
  </script>
  <style>
  .warning {
    display : none;
  }
  </style>
  