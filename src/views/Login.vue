<script setup lang="ts">
  import { onMounted } from 'vue'
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'

  interface FormState {
    username: string
    password: string
    remember: boolean
  }

  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
  })
  const router = useRouter()

  const onFinish = (values: any) => {
    console.log('Success:', values)
    router.push('/')
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  onMounted(() => {
    console.log('login')
    // 登录页清除session
  })
</script>

<template>
  <div class="login-page">
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish" @finish-failed="onFinishFailed">
      <a-form-item label="账号" name="username" :rules="[{ required: true, message: '请输入用账号' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入用密码' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang="scss">
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
