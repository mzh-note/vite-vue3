<script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useLoadingStore } from '@/store/useLoadingStore'
  import { RouterView, useRouter } from 'vue-router'
  import useUserStore from '@/store/useUserStore'
  import { session } from '@/api/auth'

  const loadingStore = useLoadingStore()
  const { showLoading, hideLoading } = loadingStore
  const { isLoading, tips } = storeToRefs(loadingStore)
  const { setUserInfo, clearUserInfo } = useUserStore()
  const router = useRouter()

  const initSession = async () => {
    showLoading()
    try {
      const res = await session()
      setUserInfo(res.data)
      hideLoading()
    } catch (e) {
      hideLoading()
      clearUserInfo()
      router.push('/404', { replace: true })
      console.error(e)
    }
  }
  onMounted(() => {
    console.log('vite-vue3 init')
    initSession()
  })
</script>

<template>
  <a-spin :spinning="isLoading" :tip="tips">
    <RouterView v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </RouterView>
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
