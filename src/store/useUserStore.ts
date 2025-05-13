import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { session } from '@/api/auth'
import { useLoadingStore } from '@/store/useLoadingStore'

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

    const loadingStore = useLoadingStore()
    const { showLoading, hideLoading } = loadingStore
    const getSession = async () => {
      showLoading()
      const res = await session()
      console.log(res)
      hideLoading()
      setUserInfo({ token: 'ddd', id: 'ad' })
    }
    const setUserInfo = (value) => {
      // Object.assign(userInfo, { ...value})
      userInfo.token = value.token
      userInfo.id = value.id
      console.log('setUserInfo', userInfo)
    }
    const clearUserInfo = () => {
      userInfo.token = ''
      userInfo.id = ''
    }
    return {
      userInfo,
      getSession,
      setUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  }
)

export default useUserStore
