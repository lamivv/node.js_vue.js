<template>
  <!-- header Component -->
  <default-header />
  <router-view/>
  <!-- footer Component -->
</template>
<script>
import DefaultHeader from './layouts/DefaultHeader.vue';

export default {
  components : {
    DefaultHeader,
  }
}
</script>