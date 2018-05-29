import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/index'

import vacation from '@/view/vacation/index'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/',
      redirect: '/home'
    }, {
      path: '/vacation',
      name: 'vacation',
      component: vacation,
      children: [
        {
          path: 'detail',
          name: '详情页面',
          component: _import('vacation/detail/index'),
          children: [{
            path: 'records',
            name: 'allvacation',
            component: _import('vacation/records/index')
          }]
        },
        {
          path: 'index',
          name: '主页',
          component: _import('vacation/index')
        },
        {
          path: 'notice',
          name: '请假须知',
          component: _import('vacation/notice/index')
        }
      ]
    }, {
      path: '/approval',
      name: 'approval',
      component: _import('approval/index')
    }, {
      path: '/leavedetails',
      name: 'leavedetails',
      component: _import('approval/leavedetails/index'),
      meta: {requiresAuth: true}
    }, {
      path: '/otherdetail',
      name: '详情',
      component: _import('vacation/otherDetail/index')
    }

  ]
})
