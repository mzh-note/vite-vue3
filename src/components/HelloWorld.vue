<script setup lang="ts">
  import { ref } from 'vue'
  import { Button, Icon, showToast } from 'vant'

  defineProps<{ msg: string }>()

  const count = ref(0)
  const handleClick = () => {
    showToast({
      message: '自定义图片',
      icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    })
  }
</script>

<template>
  <p>{{ msg }}</p>

  <div class="card">
    <Button type="primary" plain @click="count++">count is {{ count }}</Button>
    <Icon name="chat-o" @click="handleClick" />
    <Button type="primary" @click="count++">count is {{ count }}</Button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="less">
  .read-the-docs {
    color: #888;
  }
</style>
