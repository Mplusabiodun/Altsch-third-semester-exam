import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import store from "./../store/index"

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { requiresAuth: false },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { requiresAuth: false },
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/', 
    alias:'/products',
    name: 'Products',
    meta: { requiresAuth: true },
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    meta: { requiresAuth: true },
    component: () => import('../views/ProductDetails.vue')
  },
  {
    path: "/:notFound(.*)",
    name: "notFound",
    component: () => import("../views/NotFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login")
  } else if (to.meta.requiresAuth === false && store.getters.isAuthenticated) {
    next("/")
  } else {
    next()
  }
})

export default router
