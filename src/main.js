import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
const app = createApp(App)

app.use(i18n)

app.use(router)

app.mount('#app')
