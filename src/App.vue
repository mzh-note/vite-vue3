<script setup lang="ts">
  import HomePage from '@/pages/HomePage.vue'
</script>

<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<style scoped lang="less">
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
