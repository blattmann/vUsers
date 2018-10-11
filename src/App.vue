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
            <a class="navbar-brand" href="/about">vUsers</a>
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

<style lang="scss">
</style>
