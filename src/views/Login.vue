<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const username = ref('')
  const password = ref('')
  const onSubmit = (values) => {
    console.log('submit', values)
    router.push('/')
  }
</script>

<template>
  <div class="login-page">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登陆 </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped lang="less">
  .login-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
