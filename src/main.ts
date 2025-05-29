import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router/router'
import useUserStore from '@/store/useUserStore'

// const app: ReturnType<typeof createApp>
// let pinia: ReturnType<typeof createPinia>;

let app: ReturnType<typeof createApp>

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 独立运行逻辑
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app = createApp(App)
  app.use(pinia)
  app.use(router)
  app.mount('#app')
} else {
  renderWithQiankun({
    bootstrap() {
      console.log('bootstrap')
    },
    mount(props) {
      const { container, khh } = props
      console.log('初始挂载 khh：', khh)
      app = createApp(App)
      app.use(pinia)
      app.use(router)
      app.mount(container?.querySelector('#app') || '#app')

      const { setCurrentKhh } = useUserStore()
      setCurrentKhh(khh)
    },
    update(props: { init: boolean; url: string }) {
      const { khh, reload } = props
      if (reload) {
        console.log('重新挂载 khh', khh)
        app?.unmount()
        app = createApp(App)
        // app.use(pinia)
        app.use(router)
        app.mount('#app')

        const { setCurrentKhh } = useUserStore()
        setCurrentKhh(khh)
      }
    },
    unmount() {
      app?.unmount()
    },
  })
}
