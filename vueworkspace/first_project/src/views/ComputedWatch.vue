<!-- views/CpmputedWatch.vue -->
 <template>
  <div>
    <input type="number" v-model="price">원
    <br>
    <input type="number" v-model="count">개
    <p> 과세 금액 : {{ amount }}원</p>
    <p> 부가세 10% : {{ tax }}원</p>
    <p> 결제 금액 : {{ total }}원</p>
    <p :class="{ 'warn' : isShow }"> 결제 금액이 5만원을 초과했습니다. </p>
  </div>
 </template>
 <script>
  export default {
    data() {
      return{
        price : 0,
        count : 0,
        isShow : true,
      }
    },
    computed : {
      amount(){
        return this.price * this.count;
      },
      tax(){ // computed에 정의되어있는 옵션을 사용하고 있음(참조대상 : 데이터에 정의되어 있는 대상, computed에 정의되어있는 또 다른 변수)
        return this.amount * 0.1;
      },
      total(){
        return this.amount + this.tax;
      }
    },
    watch : {
      total(){
        if(this.total > 50000){
          this.isShow = false;
        }
      }
    }
  }
</script>
<style>
  .warn {
    display : none;
  }
</style>