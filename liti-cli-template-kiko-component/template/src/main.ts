import { createApp } from 'vue'
import Kiko from './index'
import App from './App.vue'
const app = createApp(App)
app.use(Kiko)
app.mount('#app')
