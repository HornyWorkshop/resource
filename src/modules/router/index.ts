import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

routes.push({
  path: '/',
  redirect: '/games',
})

export function createAppRouter() {
  return createRouter({
    history: createWebHashHistory(),
    routes,
  })
}
