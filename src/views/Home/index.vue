<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import { useRouter, RouterLink, useRoute } from 'vue-router'
  import useUserStore from '@/store/useUserStore'
  import { onMounted } from 'vue'
  import { logout } from '@/api/auth'

  const { clearUserInfo } = useUserStore()
  const router = useRouter()
  const route = useRoute()
  const toLogout = async () => {
    await logout()
    clearUserInfo()
    router.push('/login', { replace: true })
  }
  onMounted(() => {
    console.log(route.path, route.name)
  })
</script>

<template>
  <div class="home-page">
    <a-space>
      <RouterLink to="/user">个人中心</RouterLink>
      <a-button @click="toLogout">退出登陆</a-button>
    </a-space>
    <HelloWorld msg="Vite + Vue3" />
  </div>
</template>

<style scoped lang="scss">
  .home-page {
    color: #f22;
  }
</style>
