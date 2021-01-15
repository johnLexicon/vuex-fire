import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import AddArticle from '../views/AddArticle.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/articles',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/add',
    name: 'AddArticle',
    component: AddArticle,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.user){
      next()
    } else {
      next({name: 'Login'})
    }
  } else {
    next()
  }
})

export default router
