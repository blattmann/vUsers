<template>
  <div class="details container">
    <router-link to="/">Back to the list</router-link>
    <div v-if="user">
      <h1 v-if="user.name" class="page-header">{{user.name}}</h1>

      <ul class="list-group">
        <li v-if="user.phone" class="list-group-item">
          <span class="col-xs-1 glyphicon glyphicon-phone" aria-hidden="true"></span>
          <span class="col-xs-10">{{user.phone}}</span>
        </li>
        <li v-if="user.email" class="list-group-item">
          <span class="col-xs-1 glyphicon glyphicon-envelope" aria-hidden="true"></span>
          <span class="col-xs-10">{{user.email}}</span>
        </li>
        <li v-if="user.website" class="list-group-item">
          <span class="col-xs-1 glyphicon glyphicon-home" aria-hidden="true"></span>
          <span class="col-xs-10">{{user.website}}</span>
        </li>
      </ul>

      <ul class="list-group">
        <li class="list-group-item" v-if="user.address.street">
          <i class="col-xs-1 fa fa-road" aria-hidden="true"></i>
          <span class="col-xs-10">{{user.address.street}}</span>
        </li>
        <li class="list-group-item" v-if="user.address.zipcode && user.address.city">
          <i class="col-xs-1 fa fa-map-marker" aria-hidden="true"></i>
          <span class="col-xs-10">{{user.address.zipcode}} {{user.address.city}}</span>
        </li>
        <li class="list-group-item" v-else-if="user.address.city">
          <i class="col-xs-1 fa fa-map-marker" aria-hidden="true"></i>
          <span class="col-xs-10">{{user.address.city}}</span>
        </li>
      </ul>
    </div>

    <div v-else>
      <h1 class="page-header">No data available!</h1>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

// Import api queries
import api from '@/api'

export default {
  name: 'user',
  data() {
    return {
      user: ''
    }
  },
  created() {
    const vm = this
    vm.fetchUser(vm.$route.params.id)
  },
  methods: {
    fetchUser(id) {
      // Get single user data
      const vm = this
      api.getSingleUser(id).then(
        data => {
          vm.user = data.data
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-group-item {
  padding: 5px 0px 20px;
}
</style>
