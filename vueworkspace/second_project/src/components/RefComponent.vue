<!-- components/RefComponent.vue -->
<template>
  <div>
    <!-- <input type="text" v-model.number="content"> -->
    <input type="number" v-model="content">
    <p>{{ content }}</p>
    <button ref="btn" @click="plusCount">더하기</button>
  </div>
</template>
<script>
// 리프속성은 고유값을 가짐. 원래는 html태그에 사용하는 속성임
// 특정 이벤틀를 강제로 발생 시키는 목적으로 사용
  export default {
    data(){
      return {
        content : '',
      }
    },
    mounted(){
      //console.log(this.$refs.btn);
      this.$refs.btn.click();
    },
    methods : {
      plusCount(){
        // alert('버튼을 클릭했습니다.');
        if((typeof this.content) == 'number'){
          let sum = this.content + 100;
          this.content = sum;
        } else {
          alert('데이터 타입이 숫자가 아닙니다.');
        }
      }
    }
  }
</script>