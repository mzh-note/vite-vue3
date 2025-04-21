<script setup lang="ts">
  import { ref } from 'vue'
  import { Button, Icon, showToast } from 'vant'

  defineProps<{ msg: string }>()

  const count = ref(0)
  const handleClick = () => {
    showToast({
      message: '自定义图片',
      icon: 'https://mazhanghua.com/logo.png',
    })
  }
</script>

<template>
  <div class="card">
    <van-space fill>
      <Button type="primary" plain @click="count++">count is {{ count }}</Button>
      <Icon name="chat-o" @click="handleClick" />
      <Button type="primary" @click="count++">count is {{ count }}</Button>
    </van-space>
  </div>
</template>

<style scoped lang="scss">
  .read-the-docs {
    color: #888;
  }
</style>
