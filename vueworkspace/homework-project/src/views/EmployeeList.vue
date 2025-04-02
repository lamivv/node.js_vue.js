<template>
  <div class="container">
   <table class="table">
    <caption>Total : {{ count }}</caption>
    <thead>
      <tr>
        <td>No</td>
        <td>아이디</td>
        <td>First이름</td>
        <td>Last이름</td>
        <td>이메일</td>
        <td>성별</td>
        <td>IP주소</td>
      </tr>
    </thead>
    <tbody>
      <template v-if="count > 0">
        <tr v-for="(info, idx) in employeeList" v-bind:key="info.id" v-on:click="goToEmployeeInfo(info.id)">
          <td>{{ idx + 1 }}</td>
          <td>{{ info.id }}</td>
          <td>{{ info.first_name }}</td>
          <td>{{ info.last_name }}</td>
          <td>{{ info.email }}</td>
          <td>{{ info.gender }}</td>
          <td>{{ info.ip_address }}</td>
        </tr>
      </template>
      <tr v-else>
        <td colspan="4">
          현재 데이터가 존재하지 않습니다.
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
        employeeList : [],
      }
    },
    computed : {
      count(){
        return this.employeeList.length;
      }
    },
    created(){
      this.getEmployeeList();
    },
    methods : {
      async getEmployeeList(){
        let ajaxRes = await axios.get('/api/employees')
                                .catch(err => console.log(err));
        this.employeeList = ajaxRes.data;
      },
      goToEmployeeInfo(empId){
        this.$router.push({path : '/employeeInfo' ,  query : { id : empId}});
      }
    }
  }
</script>