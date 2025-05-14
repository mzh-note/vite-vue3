import { get, post } from '@/api/https'

export const session = () => {
  return get(`/api/session?_=${new Date().getTime()}`)
}

export const logout = () => {
  return post('/api/logout')
}
