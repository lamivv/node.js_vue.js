<template>
  <div class="container text-center">
    <!-- content 영역 -->
    <div class="row">
      <div class="row">
        <div class="col-4">아이디</div>
        <div class="col-8">{{ employee.id }}</div>
      </div>
      <div class="row">
        <div class="col-4">First이름</div>
        <div class="col-8">{{ employee.first_name }}</div>
      </div>
      <div class="row">
        <div class="col-4">Last이름</div>
        <div class="col-8">{{ employee.last_name }}</div>
      </div>
      <div class="row">
        <div class="col-4">이메일</div>
        <div class="col-8">{{ employee.email }}</div>
      </div>
      <div class="row">
        <div class="col-4">성별</div>
        <div class="col-8">{{ employee.gender }}</div>
      </div>
      <div class="row">
        <div class="col-4">IP주소</div>
        <div class="col-8">{{ employee.ip_address }}</div>
      </div>
    </div>
    <!-- button 영역 -->
    <div class="row">
      <button class="col btn btn-info" v-on:click="goToUpdateInfo()">
        수정
      </button>
      <button class="col btn btn-light" v-on:click="goToEmployeeList()">
        목록
      </button>
      <button class="col btn btn-danger" v-on:click="delInfo()">
        삭제
      </button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        employee : {}
      }
    },
    created() {
      const selectId = this.$route.query.id;
      this.getEmployeeInfo(selectId);
    },
    methods : {
      async getEmployeeInfo(id) {
        let ajaxRes = await axios.get(`/api/employees/${id}`)
                                 .catch(err => console.log(err));
        this.employee = ajaxRes.data;
      },
      goToEmployeeList() {
        this.$router.push('/employeeList');
      },
      async delInfo() {
        let ajaxRes = await axios.delete(`/api/employees/${this.employee.id}`)
                                 .catch(err => console.log(err));
        let sqlRes = ajaxRes.data;
        let result = sqlRes.affectedRows;
        if(result > 0){
          alert('정상적으로 삭제되었습니다.');
          this.$router.push('/employeeList');
        } else {
          alert('삭제되지 않았습니다.');
        }
      },
      goToUpdateInfo() {
        this.$router.push({ name: 'empUpdate' , params : { id : this.employee.id }});
      }
    }
  }
</script>