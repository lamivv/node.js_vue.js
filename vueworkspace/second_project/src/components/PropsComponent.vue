<!-- components/PropsComponent.vue -->
<template>
  <div>
    <!-- 정적 데이터 전달
    <PageTitle title="Today is .."/>-->
    <PageTitle title="First!"/> 
    <hr>
    <PageContent v-bind:title="header" 
                  v-bind:count="(10+15)" 
                  :writer="['Adward']" 
                  :regdate="20241205" 
                  :content = "{
                                first : 'node.js', 
                                econd : 'vue.js'
                              }" />
    <hr>
    <PageContent v-bind="info" @update-info="handler"/>
    <hr>
    <RefComponent ref="child"/>
    <hr>
    <label>부모 데이터 : <input type="number" v-model="num"></label>
    <button @click="childHandler">자식 제어</button>
  </div>
</template>
<script>
  // 자식 컴포넌트를 임포트 받아서
  import PageTitle from './PageTitle.vue';
  import PageContent from './PageContent.vue';
  import RefComponent from './RefComponent.vue';
  // 자식 컴포넌트 이름을 components에 등록 // 여기에 등록하지 않은 컴포넌트는 자식으로 인지하지 않음
  export default {
    data(){
      return {
        header : "게시글 조회",
        info : {
          title : 'Today is',
          count : 5,
          writer : 'Adward',
          regdate : '2024-11-19',
          content : 'No Content',
        },
        num : 0
      }
    },
    components : {
      PageTitle,
      PageContent,
      RefComponent,
    },
    created(){
      console.log('PropsComponent.vue Created');
    },
    mounted(){
      console.log('PropsComponent.vue Mounted');
    },
    methods : {
      handler(readInfo){
        // 자식 컴포넌트의 emit을 기반으로 넘긴 데이터가 매개변수로 넘어옴
        alert('자식 컴포넌트 요청');
        this.info.count = readInfo;
      },
      childHandler(){
        // 1) 자식 컴포넌트의 함수 직접 호출
        this.$refs.child.plusCount();
        
        // 2) 자식 컴포넌트의 태그에 직접 접근
        let RefCom = this.$refs.child;
        RefCom.$refs.btn.click();
      }
    },
    watch : {
      num() {
        this.$refs.child.content = this.num;
      }
    }
  }
</script>
