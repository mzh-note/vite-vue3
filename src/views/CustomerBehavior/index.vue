<script setup lang="ts">
  import { onMounted } from 'vue'
  import useUserStore from '@/store/useUserStore'

  const { userInfo, currentKhh } = useUserStore()

  onMounted(() => {
    console.log('请求接口', userInfo?.token, currentKhh)
  })
</script>

<template>
  <div class="customer-behavior">
    <a-space>
      <RouterLink to="/panorama-web/web/user">个人中心</RouterLink>
    </a-space>
  </div>
</template>

<style scoped lang="scss">
  .customer-behavior {
    color: #f22;
  }
</style>
