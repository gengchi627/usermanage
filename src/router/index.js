import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import User from '@/views/Nav1/user.vue'
import Table from '@/views/Nav1/table.vue'
import Page4 from '@/views/Nav2/page4.vue'
import Page5 from '@/views/Nav2/page5.vue'
import Page6 from '@/views/Nav3/page6.vue'

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
        { path: '/page4', component: Page4, name: 'Page4' },
        { path: '/page5', component: Page5, name: 'Page5' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航三',
      iconCls: 'el-icon-menu',
      leaf: false,
      children: [
        { path: '/page6', component: Page6, name: 'Page6' }
      ]
    }
  ]
})
