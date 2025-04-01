<template>
  <div>
    <input type="text" v-model.lazy="selected">
    <!-- 동적 컴포넌트를 구성하는 방식-->
    <!-- component의 is라는 속성 => 실행할 컴포넌트의 정보를 저장 -->
    <!-- 변수가 가지고 있는 이름을 자식으로 등록되어 있는 컴포넌트 중에서 검색해서 있으면 해당위치에 출력-->
    <component v-bind:is="selected"></component>
  </div>
</template>
<script>
import PropsCom from './components/PropsComponent.vue';
import TextModal from './views/TextModal.vue';

export default {
  data(){
    return{
      selected : 'PropsCom',
    }
  },
  components : { // 자식 컴포넌트로 등록(객체)
    PropsCom, // 'PropsCom' : PropsCom
    TextModal
  },
  created(){
    console.log('App.vue Created');
  },
  mounted(){
    console.log('App.vue Mounted')
  },
}
// 컴포넌트 라이프 사이클
// created : 생성... 인스턴스가 생성된 시점
// mounted : Virtual-DOM => Real DOM... realDOM에 연결된 순간을 mounted
// updated : 데이터 변경... 무한루프 조심
// destroyed : 소멸
</script>
