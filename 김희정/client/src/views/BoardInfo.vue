<!-- views/CustomerInfo.vue -->
<template>
  <div class="container text-center">
   <!-- content 영역 -->
    <table class="table">
      <tr>
        <th class="text-center">번호</th>
        <td class="text-center">{{ board.no }}</td>
        <th class="text-center">작성일</th>
        <td class="text-center">{{ dateFormat(board.created_date, 'yyyy-MM-dd') }}</td>
        <th class="text-center">이름</th>
        <td class="text-center">{{ board.writer }}</td>
      </tr>
      <tr>
        <th class="text-center" colspan="2">제목</th>
        <td class="text-center" colspan="4">{{ board.title }}</td>
      </tr>
      <tr>
        <td class="text-center">{{ board.content }}</td>
      </tr>
      <!-- button 영역 -->
      <tr>
        <button class="col btn btn-info" v-on:click="goToUpdateForm()">
          수정
        </button> 
      </tr>
    </table>
  </div>
 </template>
 <script>
   import axios from 'axios'
   export default {
     data() {
       return {
         board : {},
       }
     },
     created() {
       const selectBno = this.$route.query.bno;
       this.getBoardInfo(selectBno);
     },
     methods : {
       async getBoardInfo(bno){ 
         let ajaxRes = await axios.get(`/api/board/${bno}`) 
                                  .catch(err => console.log(err));
        // console.log(ajaxRes.data);
         this.board = ajaxRes.data;
       },
       dateFormat(value, format){
       let date = (value == null) ? new Date() : new Date(value);
       let year = date.getFullYear();
       let month = ('0'+ (date.getMonth() +1)).slice(-2);
       let day = ('0' + date.getDate()).slice(-2);
       let result = format.replace('yyyy', year).replace('MM', month).replace('dd',day);
       return result;
       },
       goToUpdateForm(){
         this.$router.push({ name : 'boardUpdate', query : { bno : this.board.no }});
       }
     }
   }
 </script>