<!-- views/OnEvent.vue -->
<template>
  <div>
    <input v-model="msg" v-on:keyup.alt.enter="clear();">
    <p>{{ msg }}</p>
    <hr>
    <!-- on디렉티브 -->
    <!-- .self => target속성이 등록된게 아니면 자기자신을 선택했을 때가 아니면 동작을 제한함 -->
    <form v-on:click.self="message('form')"> 
      Form
      <!-- .once => 한번 핸들러가 동작이 되었으면 더이상 동작하지 않음 -->
      <div v-on:click.once="message('div')">
        Div
        <!-- .stop => 버블링을 원천적으로 차단 상위인 div태그까지 전달하지 않음-->
        <p @click.stop="message('p')">
          P
          <!-- .prevent => a태그의 기본속성인 페이지 이동기능을 일시 정지 (제거하는게 아님) -->
          <a @click.prevent="message('a')" href="http://www.naver.com">네이버</a>
        </p>
      </div>
    </form>
    <hr>
    <!-- 괄호를 쓰지않으면 매개변수 선언하지 않아도 무조건 event객체가 매개변수로 넘어옴 +추가적인 매개변수 등록이 불가함 -->
    <button @click="increaseCounter">Add 1</button>
    <br>
    <!-- 함수를 호출하는 방식에는 매개변수를 추가할 수 있음. 이벤트 핸들러 안에 들어가는 한줄의 코드라서 event객체를 사용하려면 $event를 명시적으로 작성 -->
    <button @click="setCount(num, $event)">Add {{ num }}</button>
    <p>The Counter is : {{ counter }}</p>
  </div>
</template>
<script>
  export default {
    data(){ // 데이터(CRUD) => 프로퍼티
      return{
        msg : '',
        num : 7,
        counter : 0,
      }
    },
    methods : {
      clear(){
        this.msg = '';
      },
      message(tag){
        alert(`${tag}, 선택`);
      },
      increaseCounter(event){
        console.log('increase', event);
        this.counter++;
      },
      setCount(value, event){
        console.log('setCount',event);
        this.counter += value;
      },
    }
  }
</script>
<style>
  form, form * {
    margin : 10px;
    border : 1px solid skyblue;
  }
</style>