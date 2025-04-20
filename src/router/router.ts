import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/:pathMatch(.*)*', // 404的需要放最后，此处统一重定向到首页/
    name: 'NotFound',
    redirect: '/',
    // component:()=>import('@/views/404.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to, _from, next) => {
  const title = to?.meta?.title
  document.title = title as string
  // if (to.path === '/user') {
  //   next()
  // }
  next()
})

export default router
