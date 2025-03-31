<!-- views/DataBinding.vue -->
<template>
  <!-- HTML -->
   <div>
    <!-- 이중 괄호 => 간단한 연산 가능 -->
      <h1>{{ title }}</h1>
    <!-- directive : Vue의 명령 수행, 'v-' 접두어 사용 -->
      <!-- text속성을 제어하는 디렉티브 -->
        <h2 v-text="title" id="home"></h2> 
      <!-- innerHTML속성을 제어하는 디렉티브 -->
        <p v-html="tagList"></p>
      <!-- v-bind 디렉티브 => 단방향 바인딩 => 태그가 가지고 있는 모든 속성에 매핑할 수 있음 id name class style 다 가능함 -->
        <p v-text="tagList" v-bind:name="tagName"></p>
      <!-- v-model 디렉티브 => 양방향 바인딩 -->
        <input type="text" v-model="valueModel">
        <p>{{ valueModel + 1000 }}, {{ typeof valueModel }}</p>
      <!-- 수식어(보조기능) lazy(지연), number... 등 -->
        <input type="number" v-model.lazy="numberModel">
        <p>{{ numberModel }}, {{ numberModel + 10000 }}</p>
        <select v-model="selectModel">
          <option value="summer">여름</option>
          <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>
        <textarea v-model="textModel"></textarea>
        <hr>
      <!-- checkbox의 기본 값은 checked옵션값을 받아 boolean타입 true, false인데 true-value처럼 대체값을 직접 지정할 수 있다 -->
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p>{{ chData }}</p>
        <!-- 한 항목에 대한 선택지 원래는 name속성으로 구분했는데 vue에서는 v-model이 같음 => 덮어쓰는 개념이 아니라 체크된 값을 배열로 받음-->
        <div>
          <input type="checkbox" value="Seoul" v-model="city">서울
          <input type="checkbox" value="Daegu" v-model="city">대구
          <p>{{ city }}</p>
        </div>  
        <div>
          <input type="radio" value="Reading" v-model="hobby">독서
          <input type="radio" value="Moving" v-model="hobby">영화
          <input type="radio" value="Sports" v-model="hobby">운동
          <p>{{ hobby }}</p>
        </div>
        <img v-bind:style="styleData" v-bind:src="imgUrl">
        <div class="container" v-bind:class="myClass">Class Binding Second</div>
        <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError }">Class Binding Second</div>
   </div>
</template>
<script>
  // Vue 객체의 데이터, 기능
  export default {
    data(){ // 데이터 바인딩에 사용하는 데이터들(CRUD)
      return {
        title : 'Hello, Vue.js',
        tagList : '<strong>Today is ... </strong>',
        tagName : 'bindTest',
        valueModel : 'Korea',
        numberModel : '0',
        selectModel : 'winter',
        textModel : '백견불여일타',
        chData : '',
        city : [],
        hobby : '',
        styleData : { // 권장
          // 'background-color' : 'skyblue',
          backgroundColor : 'skyblue',
          width :'200px',
        },
        backSetting : 'background : skyblue; width:200px;', // 비권장
        imgUrl : 'http://kr.vuejs.org/images/logo.png',
        isActive : false,
        hasError : !this.isActive,
        myClass : 'active'
      }
    },
    computed : {
      hasError : function(){
        return !this.isActive;
      }
    }
  }
</script>
<style>
  /* CSS */
.text-red{
  color : red;
}
.container{
  width : 100;
  height : 200px;
}
.active{
  background-color: aquamarine;
  font-weight : bold;
}
</style>