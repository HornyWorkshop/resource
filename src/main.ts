import { createApp } from 'vue'

import app from './app.vue'
import { createAppRouter } from './modules/router'
import './assets/tailwind.css'

createApp(app).use(createAppRouter()).mount('#app')
