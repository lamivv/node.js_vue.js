<!-- components/CommonComponent.vue -->
<template>
  <!-- 화면단 : Component가 가지는 HTML태그 구조를 template태그가 가진다 body태그 같은 역할 -->
   <p>{{ year }}년 {{ month }}월 {{ day }}일</p> <!-- 이중 괄호가 뷰가 가지고 있는 데이터를 뿌려주는 것임-->
   <p>다음해 {{ afterYear }}</p>
</template>
<script>
  // Component를 관리하는 Vue 객체 정의 : DATA 포함
export default {
  data(){ // vue가 처리하는 데이터(CRUD) => 프로퍼티
    let today = new Date();
    return { // 함수의 결과값으로 반환해야 하기 때문에 return구문 안에서 처리해야 하는 방식임
      year : today.getFullYear(),
      month : today.getMonth() + 1,
      day : today.getDate(),
    }
  },
  computed : { // 기존 데이터를 기반으로 연산한 결과값(Read Only) // => 프로퍼티
    // afterYear function(){}
    afterYear(){ // 객체 내부에 메서드를 등록할 때 표현하는 방식 중 하나
      return this.year + 1 ;
    },
  },
  methods : { // Vue객체가 사용하는 모든 종류의 함수를 말함 // 계산을 하거나 아작스로 보내는 역할 등
    
  },
  watch : { // 데이터 변경을 감지해서 그에 따른 추가 작업 정의 (감시자)
    month(){ // 새로운 프로퍼티가 아니라 기존에 등록된 프로퍼티 중에서 골라와야 함
      if((this.month.toString()).length == 1 && this.month < 10){
        this.month = '0' + this.month;
      }
    }
  }
}
</script>
<style scoped>
   /* 화면단 : Component가 가지는 Style에 대한 부분
   컴포넌트 별로 독립된 스타일을 적용할 수 있음(scoped) */
</style>