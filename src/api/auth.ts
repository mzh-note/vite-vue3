import { get } from '@/api/https'

export const session = () => {
  return get('https://api.mazhanghua.com/login/status')
  // return get(`/api/session?_=${new Date().getTime()}`)
}
