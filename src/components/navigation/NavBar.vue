<template>
  <!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
  <router-link class="navbar-brand" exact to="/articles">Navbar</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav mr-auto">
      <li v-if="!user" class="nav-item">
        <router-link exact to="/" class="nav-link">Log in
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li v-if="user" class="nav-item">
        <a @click.prevent="logOut" href="#" class="nav-link">Log out
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li v-if="user" class="nav-item">
        <router-link exact to="/add" class="nav-link">Add article</router-link>
      </li>
    </ul>
    <ul v-if="user" class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item mr-3 mt-1 text-white">{{ user.email }}</li>
      <!-- <li class="nav-item avatar">
        <a class="nav-link p-0" href="#">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
            alt="avatar image" height="35">
        </a>
      </li> -->
    </ul>
  </div>
</nav>
<!--/.Navbar -->
</template>

<script>
import Firebase from 'firebase'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'NavBar',
  computed: mapState(['user']),
  methods: {
     ...mapActions(['addUser']),
     async logOut() {
      try {
        await Firebase.auth().signOut()
        this.addUser(null)
        this.$router.replace('/')
      } catch (err) {
        console.error(err.message)
      }
    },
  }
}
</script>

<style>

</style>