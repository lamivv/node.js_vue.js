<!-- views/ListBinding.vue -->
<template>
  <div>
    <!-- 이벤트 처리를 담당하는 on 디렉티브 -->
    <button v-on:click="addData">+</button> 
    <input type="number" v-model.lazy="no">
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prod, index) in products" v-bind:key="prod.product_no">
          <td>{{ prod.product_name }}</td>
          <td>{{ prod.price }}</td>
          <td>{{ prod.category }}</td>
          <td>{{ prod.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  let data = [
    { 
      product_no : 1000,
      product_name: "기계식키보드",
      price: 25000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
    {
      product_no : 2000,
      product_name: "무선마우스",
      price: 12000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
    {
      product_no : 3000,
      product_name: "아이패드",
      price: 725000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
  ];

  // 자바스크립트
  // <button onClick="selected();"> 이벤트객체 사용불가 
  // 위의 방식은 buttonTag.onclick = function (event) {selected();} 이렇게 들어와서 사용 불가함
  // buttonTag.onclick = function (event) {selected(event);} 이렇게 사용되어야 하기때문에 위의 방식은 사용불가함
  // <button onClick="selected">
  // 위의 방식은 buttonTag.onclick = selected; 와 같음. 사용가능
  // let testFunc = selected(); 함수 호출 리턴값
  // let testFunc = selected; 함수 복사
  
export default {
  data(){
    return{
      products : data,
      no : ''
    }
  },
  methods : {
    addData(event){
      let obj = {
        product_no : this.products.length * 1000,
        product_name : "무선충전기",
        price: 25000,
        category: "노트북/태블릿",
        delivery_price: 3000,
      }
      this.products.push(obj);
      // this.products[this.products.length] = obj;
    }
  },
  watch :{
    no(){
      this.products.splice(this.no, 1); // (startIndex, 삭제갯수(start포함), 업데이트하고싶은객체, 업데이... , 업..)
    }
  }
}
</script>
<style>
</style>