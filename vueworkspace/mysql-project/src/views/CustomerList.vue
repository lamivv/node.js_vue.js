<!-- views/CustomerList.vue -->
<template>
  <div class="container">
    <table class="table">
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>No</th>
          <th>아이디</th>
          <th>이름</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count > 0">
          <!-- <tr v-for="info in customerList"> -->
          <tr v-for="(info, idx) in customerList" v-bind:key="info.id" v-on:click="goToCustomerInfo(info.id)">
            <td>{{ idx + 1 }}</td>
            <td>{{ info.id }}</td>
            <td>{{ info.name }}</td>
            <td>{{ info.phone }}</td>
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
  import axios from 'axios' // => AJAX

  export default {
    data(){
      return {
        customerList : [],
      }
    },
    computed : {
      count(){
        return this.customerList.length;
      }
    },
    created(){ // 처음부터 데이터를 가져야 하기 때문에 라이프사이클 중 create를 활용
      // 컴포넌트가 초기화할 데이터 호출
      this.getCustomerList();
    },
    methods : {
      async getCustomerList(){
        let ajaxRes 
        // browser가 Same Origin Policy체크 => CORS 
        = await axios.get(`/api/customers`)  // http://localhost:3000/customers
                     .catch(err => console.log(err));
        this.customerList = ajaxRes.data;
      },
      goToCustomerInfo(custId){
        // 라우터에 등록되어 있는 컴포넌트를 부르는 메서드 // $router => index.js에 있는 const router를 가리킴
        // 라우터 일 시키기 ㅋㅋ push()
        this.$router.push({ name : 'custInfo' , query : { id : custId }});
        // custId값도 같이 넘겨야 하는디.. 2가지 방법이 있다. query(GET방식=urlencoed) 와 params
        // query : { key : value } => ?key=value

        // params
        // 1) route의 path 속성 : '/target/:uId'
        // 2) params : { uId : value } => /target/value
      }
    }
  }
</script>
