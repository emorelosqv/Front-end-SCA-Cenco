
const authRoutes = {
  name: "auth",
  component: () => import('@/layouts/AuthLayout.vue'),
  children: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/modules/auth/views/LoginForm.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/modules/auth/views/RegisterForm.vue')
    },
  ],
}

export default authRoutes;

