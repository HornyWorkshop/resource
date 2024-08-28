import './assets/tailwind.css'

import { createApp } from 'vue'
import app from './app.vue'
import { createAppRouter } from './modules/router'

createApp(app).use(createAppRouter()).mount('#app')
