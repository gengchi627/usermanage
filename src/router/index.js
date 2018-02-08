import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'
import Main from '@/views/main/main.vue'
import Home from '@/views/home/home.vue'
import User from '@/views/Nav1/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
