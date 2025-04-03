<!-- views/CustomerAdd.vue -->
<template>
  <div class="container">
    <div class="row">
      <label>No.</label>
      <slot name="no"></slot>
    </div>
    <div class="row">
      <label>제목</label>
      <slot name="title"></slot>
    </div>
    <div class="row">
      <label>작성자</label>
      <slot name="writer"></slot>
    </div>
    <div class="row">
      <label>내용</label>
      <slot name="content"></slot>
    </div>
    <div class="row">
      <label>작성일자</label>
      <slot name="created_date"></slot>
    </div>
    <div>
      <br>
      <slot name="button"></slot>
    </div>
  </div>
  </template>
  