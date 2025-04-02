<template>
  <DefaultHeader />
  <router-view/>
</template>
<script>
  import DefaultHeader from './layouts/DefaultHeader.vue';

  export default {
    components :{
      DefaultHeader
    }
  }
</script>
