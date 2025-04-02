<template>
  <div class="container">
    <div class="row">
      <label>아이디</label>
      <input type="text" v-model="info.id" readOnly>
    </div>
    <div class="row">
      <label>First이름</label>
      <input type="text" v-model="info.first_name">
    </div>
    <div class="row">
      <label>Last이름</label>
      <input type="text" v-model="info.last_name">
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="text" v-model="info.email">
    </div>
    <div class="row">
      <label>성별</label>
      <input type="text" v-model="info.gender">
    </div>
    <div class="row">
      <label>IP주소</label>
      <input type="text" v-model="info.ip_address">
    </div>
    <br>
    <div class="row">
      <button class="btn btn-info" v-on:click="updateEmployee()">
        수정
      </button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        info : {
          first_name : null,
          last_name : null,
          email : null,
          gender : null,
          ip_address : null
        }
      }
    },
    created() {
      const selectId = this.$route.params.id;
      this.getEmployeeInfo(selectId);
    },
    methods : {
      async getEmployeeInfo(id) {
        let ajaxRes = await axios.get(`/api/employees/${id}`)
                                 .catch(err => console.log(err));
        this.info = ajaxRes.data;
      },
      async updateEmployee() {
        let updateData = {
          first_name : this.info.first_name,
          last_name : this.info.last_name,
          email : this.info.email,
          gender : this.info.gender,
          ip_address : this.info.ip_address
        }
        let ajaxRes = await axios.put(`/api/employees/${this.info.id}`, updateData)
                                 .catch(err => console.log(err));
        let sqlRes = ajaxRes.data;
        let result = sqlRes.affectedRows;
        if ( result > 0 ){
          alert('정상적으로 수정되었습니다.');
          this.$router.push({path : '/employeeInfo' ,  query : { id : this.info.id}});
        } else {
          alert('정상적으로 수정되지 않았습니다.');
        }
      }
    }
  }
</script>
