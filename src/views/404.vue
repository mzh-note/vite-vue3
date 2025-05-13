<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>
<template>
  <div>
    <a-space>
      <a-empty>
        <template #description>
          <span>暂无权限，<RouterLink to="/login">去登录</RouterLink></span>
        </template>
      </a-empty>
    </a-space>
  </div>
</template>

<style scoped lang="scss"></style>
