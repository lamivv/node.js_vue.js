<!-- components/PageTitle.vue -->
<!-- 자식 컴포넌트 -->
<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  /* 
  data(){
    return{
      title : 'Hello, World!',
    }
  } */
  // 부모가 넘겨준 값들
  // 배열을 기준으로 부모가 넘겨주는 값을 어떤 이름으로 받을지 선언
  // props로 받은 데이터는 전부 ReadOnly임
  props : ['title'],
  created(){
      console.log('PageTitle.vue Created');
    },
    mounted(){
      console.log('PageTitle.vue Mounted')
    },
}
</script>