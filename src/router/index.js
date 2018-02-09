import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import User from '@/views/Nav1/user.vue'
import Table from '@/views/Nav1/table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'el-icon-message',
      leaf: false,
      children: [
        { path: '/table', component: Table, name: 'Table' },
        { path: '/user', component: User, name: '列表' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'el-icon-location',
      leaf: false,
      children: [
        { path: '/table', component: Table, name: 'Table' },
        { path: '/user', component: User, name: '列表' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航三',
      iconCls: 'el-icon-menu',
      leaf: false,
      children: [
        { path: '/table', component: Table, name: 'Table' },
        { path: '/user', component: User, name: '列表' }
      ]
    }
  ]
})
