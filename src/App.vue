<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { RouterView } from 'vue-router'
  import useUserStore from '@/store/useUserStore'
  import { session } from '@/api/auth'

  const { setUserInfo, clearUserInfo } = useUserStore()
  const loading = ref(false)
  const successLogin = ref(true)

  const initSession = async () => {
    loading.value = true
    try {
      const res = await session()
      setUserInfo(res.data)
      loading.value = false
      successLogin.value = true
    } catch (e) {
      loading.value = false
      successLogin.value = false
      console.error(e)
    }
  }

  onMounted(() => {
    console.log('========= App mounted ========, current env:', import.meta.env.VITE_NODE_ENV)
    clearUserInfo()
    initSession()
  })

  const closeWindow = () => {
    window.close()
  }
</script>

<template>
  <a-spin v-if="loading" :spinning="loading" class="global-loading"></a-spin>
  <template v-else>
    <router-view v-if="successLogin" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <div v-else class="page-403">
      <a-space>
        <a-empty>
          <template #description>
            <span>暂无权限，<a-button type="link" @click="closeWindow">请重新登录</a-button></span>
          </template>
        </a-empty>
      </a-space>
    </div>
  </template>
</template>

<style scoped lang="scss">
  .global-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
  }

  .page-403 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
</style>
