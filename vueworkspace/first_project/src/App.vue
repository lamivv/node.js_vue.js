<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">DataBind</router-link> |
    <!-- <router-link v-bind:to="{ name : 'listBinding'}">ListBind</router-link> -->
    <router-link :to="{ name : 'listBind'}">ListBind</router-link> |
    <router-link to="/ifBinding">IfBind</router-link> |
    <router-link to="/onEvent">OnEvent</router-link> |
    <router-link to="/computedWatch">ComWat</router-link>
  </nav>
  <router-view/>
  <!-- 자식 컴포넌트로 정의한 컴포넌트를 html 표시하기 (태그처럼 사용) -->
  <!-- <hr>
  <DataBinding/>  -->
  
</template>
<script>
  // 컴포넌트 추가 1) 자식 컴포넌트로 등록
  // => 특정 페이지의 조각을 구성
  import DataBinding from './views/DataBinding.vue';

  export default{
    components : { // 자식 컴포넌트 정의
      DataBinding
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
