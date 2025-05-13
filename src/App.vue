<script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useLoadingStore } from '@/store/useLoadingStore'
  import { RouterView, useRouter } from 'vue-router'
  import useUserStore from '@/store/useUserStore'

  const loadingStore = useLoadingStore()
  const { isLoading, tips } = storeToRefs(loadingStore)
  const { userInfo, getSession, clearUserInfo } = useUserStore()
  const router = useRouter()

  onMounted(async () => {
    try {
      await getSession()
      console.log('session后', userInfo)
    } catch (e) {
      clearUserInfo()
      router.push('/login', { replace: true })
      console.error(e)
    }
  })
</script>

<template>
  <a-spin :spinning="isLoading" :tip="tips">
    <RouterView />
  </a-spin>
</template>

<style scoped lang="scss">
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
