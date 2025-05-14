import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface IUserInfo {
  token: string
  id: number
}
const useUserStore = defineStore(
  'user',
  () => {
    const userInfo: IUserInfo = reactive({
      token: '',
      id: '',
    })
    const setUserInfo = (value) => {
      // Object.assign(userInfo, { ...value})
      userInfo.token = value.token
      userInfo.id = value.id
    }
    const clearUserInfo = () => {
      userInfo.token = ''
      userInfo.id = ''
    }
    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  }
)

export default useUserStore
