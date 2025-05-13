import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)
  const tips = ref('')
  const showLoading = (tip?: string) => {
    isLoading.value = true
    if (tip) {
      tips.value = tip
    }
  }
  const hideLoading = () => {
    isLoading.value = false
  }
  return {
    isLoading,
    tips,
    showLoading,
    hideLoading,
  }
})
