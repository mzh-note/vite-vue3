<script setup lang="ts">
  import { LOGOUT } from '@/common/jump'
</script>
<template>
  <div class="page-403">
    <a-space>
      <a-empty>
        <template #description>
          <span>暂无权限，<a-button type="link" @click="LOGOUT">去登录</a-button></span>
        </template>
      </a-empty>
    </a-space>
  </div>
</template>

<style scoped lang="scss">
  .page-403 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
</style>
