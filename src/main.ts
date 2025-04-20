import { createApp } from 'vue'
import 'vant/lib/index.css'
import './style.css'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
