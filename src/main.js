// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import detail from './pages/detail'
import forecast from './pages/detail/forecast'
import count from './pages/detail/count'
import publish from './pages/detail/publish'
import analysis from './pages/detail/analysis'


Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: detail,
      redirect: '/detail/forecast',
      children: [{
        path: 'forecast',
        component: forecast
      },
      {
        path: 'count',
        component: count
      },
      {
        path: 'publish',
        component: publish
      },
      {
        path: 'analysis',
        component: analysis
      } ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {
    Layout
  }
})
