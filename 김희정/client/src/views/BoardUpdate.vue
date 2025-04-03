<!-- views/CustomerAdd.vue -->
<template>
  <BoardLayout>
    <template v-slot:no>
      <input type="text" v-model="tableInfo.no" >
    </template>
    <template v-slot:title>
      <input type="text" v-model="tableInfo.title" >
    </template>
    <template v-slot:writer>
      <input type="text" v-model="tableInfo.writer" >
    </template>
    <template v-slot:content>
      <input type="text" v-model="tableInfo.content" >
    </template>
    <template v-slot:created_date>
      <input type="text" v-model="tableInfo.created_date" >
    </template>
    <template v-slot:button>
      <button class="btn btn-info" v-on:click="updateBoard()">  
        저장
      </button>
    </template>
  </BoardLayout>
</template>
<!-- <template>
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
      <input type="text" v-model="tableInfo.writer" >
    </div>
    <div class="row">
      <label>내용</label>
      <input type="text" v-model="tableInfo.content">
    </div>
    <div class="row">
      <label>작성일자</label>
      <input type="text" v-model="tableInfo.created_date" >
    </div>
    <div>
      <br>
      <button class="btn btn-info" v-on:click="updateBoard()">  
        저장
      </button>
    </div>
  </div>
  </template> -->
  <script>
  import axios from 'axios'
  import BoardLayout from '@/layouts/BoardLayout.vue';
  export default{
    components : {
      BoardLayout
    },
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
    created() {
      const selectBno = this.$route.query.bno;
       this.getBoardInfo(selectBno);
    },
    computed : {

    },
    methods : {
      async getBoardInfo(bno){ 
      let ajaxRes 
      = await axios.get(`/api/board/${bno}`) // 프록시 설징 /api/customer/1
                    .catch(err => console.log(err));
      this.tableInfo = ajaxRes.data;
      },
      async updateBoard() { 
        let updateData = {
          no : this.tableInfo.no,
          title : this.tableInfo.title,
          writer : this.tableInfo.writer,
          content : this.tableInfo.content
        }
        let ajaxRes = await axios.put(`/api/board/${this.tableInfo.no}`, updateData) 
                                 .catch(err => console.log(err));
        let sqlRes = ajaxRes.data;
        let result = sqlRes.affectedRows;
        if ( result > 0 ){
          alert('정상적으로 수정되었습니다.');
          this.$router.push({ name : 'boardInfo', query : { bno : this.tableInfo.no }});
        } else {
          alert('정상적으로 수정되지 않았습니다.');
        }
      }
    }
  }
  </script>
  