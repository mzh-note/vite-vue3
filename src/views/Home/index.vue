<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import { useRouter } from 'vue-router'
  import useUserStore from '@/store/useUserStore'

  const { clearUserInfo } = useUserStore()
  const router = useRouter()
  const logout = () => {
    clearUserInfo()
    router.push('/login', { replace: true })
  }
</script>

<template>
  <div class="home-page">
    <a-space>
      <router-link to="/user">个人中心</router-link>
      <a-button @click="logout">退出登陆</a-button>
    </a-space>
    <HelloWorld msg="Vite + Vue3" />
  </div>
</template>

<style scoped lang="scss">
  .home-page {
    color: #f22;
  }
</style>
