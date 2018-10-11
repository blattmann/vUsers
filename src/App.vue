<template>
  <div id="app">

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
            <a class="navbar-brand" :href="env === 'develop' ? '/about' : '/vUsers/about'">vUsers</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li>
                <router-link to="/">Users</router-link>
              </li>
            </ul>
          </div>
          <!--/.nav-collapse -->
        </div>
      </nav>
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      env: ''
    }
  },
  created() {
    const host = window.location.host.split('.')[0]
    let environment = 'production'

    console.log('host: ', host)

    if (host.indexOf('localhost') >= 0 || host.indexOf('develop') >= 0 || host.indexOf('stage') >= 0) {
      environment = 'develop'
    }
    console.log('environment: ', environment)
  }
}
</script>
