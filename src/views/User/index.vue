<script setup lang="ts">
  import useUserStore from '@/store/useUserStore'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'
  import { goto } from '@/common/jump'
  import HelloWorld from '@/components/HelloWorld.vue'

  const useStore = useUserStore()
  const { userInfo, currentKhh } = storeToRefs(useStore)

  onMounted(() => {
    console.log('user 请求接口', userInfo.value.token, currentKhh.value)
  })
  const openCustomerBehavior = () => {
    goto('/portal/panorama-web/web/customerBehavior2')
  }
</script>

<template>
  <a-space :size="8">
    <a-button type="text">当前有效token: {{ userInfo?.token }},</a-button>
    <a-button type="text">当前userId: {{ userInfo?.userId }},</a-button>
    <a-button @click="openCustomerBehavior">客户行为</a-button>

    <RouterLink to="/panorama-web/web/customerBehavior">客户行为</RouterLink>
    <HelloWorld msg="demo" />
  </a-space>
</template>

<style scoped lang="scss"></style>
