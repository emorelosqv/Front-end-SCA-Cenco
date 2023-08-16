import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import authRoutes from '../modules/auth/router/authRoutes'
import userRoutes from '../modules/users/router/userRoutes'
const routes = [
  {
    path: '/',
    ...authRoutes

  },
  ...userRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router