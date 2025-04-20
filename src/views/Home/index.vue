<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div class="home-page">
    <van-space fill>
      <router-link to="/user">个人中心</router-link>
      <router-link to="/login">退出登陆</router-link>
    </van-space>
    <HelloWorld msg="Vite + Vue3" />
  </div>
</template>

<style scoped lang="less">
  .home-page {
    color: #f22;
  }
</style>
