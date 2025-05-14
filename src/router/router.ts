import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'
import useUserStore from '@/store/useUserStore'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/views/User/index.vue'),
    meta: {
      title: '用户中心',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登陆',
    },
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
    },
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 此处统一重定向到首页/
    name: 'NotFound',
    redirect: '/',
  },
]

const router = createRouter({
  history: qiankunWindow.__POWERED_BY_QIANKUN__ ? createWebHistory('/portal/panorama-web') : createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()
  const { userInfo } = storeToRefs(userStore)

  // console.log('router.beforeEach：', to.name, 'userInfo.value.token: ', userInfo.value.token)

  // next()
  if (to.name !== 'login' && !userInfo.value.token) {
    console.log('token失效')
    next({
      name: 'login',
    })
  } else {
    next()
  }
})

export default router
