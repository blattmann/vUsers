<template>
  <div class="container users">
    <h1 class="page-header">Users</h1>

    <p>
      The user list data is provided by <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a>. You might navigate through the provided data. If you add data it will only appear in this listing until you refresh the page, go back from a detail view or delete the data.
    </p>

    <p>
      <button v-on:click="collapsed = !collapsed">Add data</button>
    </p>

    <div v-bind:class="{'is-collapsed': collapsed}">
      <hr />
      <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
        <h2>Add new user</h2>
        <div class="form-group" :class="{'has-error': errors.has('name') }">
          <label class="label" for="email">Full name</label>
          <p :class="{ 'control': true }">
            <input v-model="name" v-validate="'required|alpha_spaces|min:3'" :class="{'input': true, 'is-danger': errors.has('name') }" class="form-control" name="name" type="text" placeholder="Please enter your full name">
            <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
          </p>
        </div>
        <div class="form-group" :class="{'has-error': errors.has('email') }" >
          <label class="label" for="email">Email</label>
          <p :class="{ 'control': true }">
            <input v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" class="form-control" name="email" type="email" placeholder="Please enter your email address">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </p>
        </div>
        <button class="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
      <div v-else>
        <h2 class="submitted">Form submitted successfully!</h2>
      </div>
    </div>

    <hr />

    <table class="table table-striped">
      <thead>
        <tr>
          <th>OK</th>
          <th>User</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:class="{contacted: user.contacted}">
          <td><input type="checkbox" class="toggle" v-model="user.contacted"></td>
          <td v-if="user.id"><router-link v-bind:to="'/user/'+user.id">{{user.name}}</router-link></td>
          <td v-else>{{user.name}}</td>
          <td class="td-email">{{user.email}}</td>
          <td><button v-on:click="deleteUser(user)">x</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  // Import configuration
  import config from '../config'

  export default {
    name: 'users',
    data() {
      return {
        users: [],
        collapsed: true,
        email: '',
        name: '',
        formSubmitted: false,
      }
    },
    methods: {
      validateBeforeSubmit(e) {
        this.$validator.validateAll();
        if (!this.errors.any()) {
          this.addUser(this)
        }
      },
      addUser: function(data) {
        this.users.push({
          name: data.name,
          email: data.email,
          contacted: false,
        });
        this.formSubmitted = true;
        var self = this;
        setTimeout(function() {
          self.resetForm();
          self.restoreForm();
        }, 2000);
      },
      deleteUser: function(user) {
        this.users.splice(this.users.indexOf(user), 1);
      },
      resetForm: function() {
        this.$data.name = '';
        this.$data.email = '';
      },
      restoreForm: function() {
        this.formSubmitted = false;
        this.collapsed = true;
      }
    },
    created: function() {
      // Get all user data
      this.$http.get(config.jsonGetUrl)
        .then(function(response) {
          let data = response.data,
              item;
            // Loop through the response and add some data to the JSON
            for(item in data) {
              // Add "contacted=false"
              data[item].contacted = false;
            }
            // Create return values
            this.users = data;
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .contacted {
    text-decoration: line-through;
  }

  .is-collapsed {
  	display: none;
  }

  .submitted {
    color: #4fc08d;
  }

  @media (max-width: 767px) {
    .td-email {
      max-width: 95px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
