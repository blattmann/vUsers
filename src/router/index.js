import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// App components
import Users from '../components/Users'
import User from '../components/User'
import About from '../components/About'

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: About},
    {path: '/users', component: Users},
    {path: '/user/:id', component: User}
  ]
})
