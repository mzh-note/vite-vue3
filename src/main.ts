import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router/router'

let app: ReturnType<typeof createApp>

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 独立运行逻辑
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  const app = createApp(App)
  app.use(pinia)
  app.use(router)
  app.mount('#app')
} else {
  // Qiankun 生命周期
  renderWithQiankun({
    mount(props) {
      console.log('主应用入参', props)
      const { container } = props
      app = createApp(App)
      app.use(pinia)
      app.use(router)
      app.mount(container?.querySelector('#app') || '#app')
    },
    update() {},
    bootstrap() {},
    unmount() {
      app?.unmount()
    },
  })
}
