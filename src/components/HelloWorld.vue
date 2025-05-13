<script setup lang="ts">
  import { ref } from 'vue'
  import { message } from 'ant-design-vue'
  import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons-vue'
  import { showGlobalSpin, hideGlobalSpin } from '@/utils/spinService'
  import { useLoadingStore } from '@/store/useLoadingStore'

  defineProps<{ msg: string }>()

  const count = ref(0)

  const { showLoading, hideLoading } = useLoadingStore()

  const success = () => {
    message.success('This is a success message')
  }
  const error = () => {
    message.error('This is an error message')
  }
  const warning = () => {
    message.warning('This is a warning message')
  }
  const loading = () => {
    message.loading('加载中')
  }

  const open = ref<boolean>(false)

  const showModal = () => {
    open.value = true
  }

  const handleOk = (e: MouseEvent) => {
    console.log(e)
    open.value = false
  }
  const showGlobalLoading = () => {
    showLoading()
    setTimeout(() => {
      hideLoading()
    }, 2000)
  }
  const showSpin = () => {
    showGlobalSpin()
    setTimeout(() => {
      hideGlobalSpin()
    }, 2000)
  }
</script>

<template>
  <div class="demo">
    <a-space :size="8">
      <a-button @click="showGlobalLoading">全局loading</a-button>
      <a-button @click="showSpin">加载loading</a-button>
      <a-button @click="count++">count is {{ count }}</a-button>
      <smile-two-tone />
      <heart-two-tone two-tone-color="#eb2f96" />
      <check-circle-two-tone two-tone-color="#52c41a" />
      <a-button @click="success">Success</a-button>
      <a-button @click="error">Error</a-button>
      <a-button @click="warning">Warning</a-button>
      <a-button @click="loading">loading</a-button>
      <a-button type="primary" @click="showModal">Open Modal</a-button>
      <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
      <a-image :width="100" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </a-space>
  </div>
</template>

<style scoped lang="scss">
  .read-the-docs {
    color: #888;
  }
</style>
