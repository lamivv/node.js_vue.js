<!-- views/BoardList.vue -->
<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count > 0">
          <!-- <tr v-for="table in boardList"> -->
          <tr v-for="table in boardList" v-bind:key="table.id" v-on:click="goToBoardInfo(table.no)">
            <td>{{ table.no }}</td>
            <td>{{ table.title }}</td>
            <td>{{ table.writer }}</td>
            <td>{{ dateFormat(table.created_date, 'yyyy-MM-dd') }}</td>
            <td>0</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="5">
            게시글이 존재하지 않습니다.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        boardList : [],
      }
    },
    computed : {
      count(){
        return this.boardList.length;
      }
    },
    created(){ 
      this.getBoardList();
    },
    methods : {
      async getBoardList(){
        let ajaxRes 
        = await axios.get(`/api/board`)  // http://localhost:3000/board
                     .catch(err => console.log(err));
        this.boardList = ajaxRes.data;
      },
      dateFormat(value, format){
      let date = (value == null) ? new Date() : new Date(value);
      let year = date.getFullYear();
      let month = ('0'+ (date.getMonth() +1)).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);
      let result = format.replace('yyyy', year).replace('MM', month).replace('dd',day);
      return result;
      },
      goToBoardInfo(tableNo){
        this.$router.push({ name : 'boardInfo' , query : { bno : tableNo }});
      }
    }
  }
</script>
