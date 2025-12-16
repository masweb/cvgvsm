import { createApp } from 'vue'
import '@/css/css.scss'
import CoreuiVue from '@coreui/vue'
import router from './router'

import './utils/coreui-dark-vue.js'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(CoreuiVue)
app.mount('#app')
