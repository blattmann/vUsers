// Core components
import Vue from 'vue'
import vueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

// Import router
import router from './router'

Vue.use(vueResource)
Vue.use(VeeValidate)

new Vue({
  router,
  template: `
    <div id="navigation">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">vUsers</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/">Users</router-link></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </nav>
      <router-view></router-view>
    </div>
  `,
}).$mount('#app')
