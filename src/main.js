import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

// bjdhkgf kasdgfjk  gasdfg adfhs
// gasdhjfg asdjkgf asdg fjkfag dfsghj


app.use(pinia)
app.use(ElementPlus)
app.mount('#lesson01')
