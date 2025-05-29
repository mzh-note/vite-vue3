import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

interface IUserInfo {
  token: string
  userId: number
  orgId: number
  employeeId: number
}
const useUserStore = defineStore(
  'persist:panorama-user',
  () => {
    const userInfo: IUserInfo = reactive({
      token: '',
      userId: '',
      orgId: '',
      employeeId: '',
    })
    const currentKhh = ref('')
    const setUserInfo = (value) => {
      // Object.assign(userInfo, { ...value})
      userInfo.token = value.token
      userInfo.userId = value.userId
      userInfo.orgId = value.orgId
      userInfo.employeeId = value.employeeId
    }
    const clearUserInfo = () => {
      userInfo.token = ''
      userInfo.userId = ''
      localStorage.removeItem('persist:panorama-user')
    }
    const setCurrentKhh = (val: string) => {
      currentKhh.value = val
    }
    return {
      userInfo,
      currentKhh,
      setUserInfo,
      clearUserInfo,
      setCurrentKhh,
    }
  },
  {
    persist: true,
  }
)

export default useUserStore
