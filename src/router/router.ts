import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'
import useUserStore from '@/store/useUserStore'

const routes = [
  {
    name: 'customerBehavior',
    path: '/panorama-web/web/customerBehavior',
    component: () => import('@/views/CustomerBehavior/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'user',
    path: '/panorama-web/web/user',
    component: () => import('@/views/User/index.vue'),
    meta: {
      title: '用户中心',
    },
  },
  {
    name: 'login',
    path: '/panorama-web/web/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登陆',
    },
  },
  {
    name: '403',
    path: '/panorama-web/web/403',
    meta: {
      title: '403',
    },
    component: () => import('@/views/403.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {
      title: '404',
    },
    component: () => import('@/views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/portal/'),
  routes,
})

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()
  const { userInfo } = storeToRefs(userStore)

  // console.log('router.beforeEach：', to.name, 'userInfo.value.token: ', userInfo.value.token)

  next()
  // if (to.name !== 'login' && !userInfo.value.token) {
  //   console.log('token失效')
  //   next({
  //     name: 'login',
  //   })
  // } else {
  //   next()
  // }
})

export default router
