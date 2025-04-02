<template>
  <div class="container">
    <div class="row">
      <label>First이름</label>
      <input type="text" v-model="info.first_name">
      <div class="form-text text-danger" :class="{'warning': nameOk}">
        이름이 입력되지 않았습니다.
      </div>
      <div class="form-text text-danger" :class="{'warning': !nameOk}">
        사용 가능한 이름입니다.
      </div>
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
      <button class="btn btn-info" v-on:click="addEmployee()" :disabled="!nameOk">
        등록
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
    computed : {
      nameOk() {
        return this.info.first_name != null && this.info.first_name != '';
      }
    },
    methods : {
      async addEmployee() {
        let ajaxRes = await axios.post('/api/employees', this.info)
                                 .catch(err => console.log(err));
        let sqlRes = ajaxRes.data;
        let empId = sqlRes.insertId;
        if ( empId > 0 ){
          alert('정상적으로 등록되었습니다.');
          this.$router.push({ name : 'empInfo', query : { id : empId }});
        } else {
          alert('정상적으로 등록되지 않았습니다.');
        }
      }
    }
  }
</script>
<style> 
  .warning {
    display : none;
  }
</style>
