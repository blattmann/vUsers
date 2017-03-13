import Vue from 'vue'
import Router from 'vue-router'

// Import configuration
import config from '../config'

Vue.use(Router)

// App components
import Users from '../components/Users'
import User from '../components/User'
import About from '../components/About'

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/user/:id', component: User},
    {path: '/about', component: About}
  ]
})
