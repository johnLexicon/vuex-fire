<template>
  <div>
    <NavBar />
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/navigation/NavBar';
import Firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    ...mapActions(['addUser', 'bindArticles'])
  },
  mounted(){
    Firebase.auth().onAuthStateChanged(user => {
      // If user is signed in.
      if (user) {
        this.addUser(user)
        this.bindArticles(user.uid)
      }
    })
  }
}
</script>

<style>

</style>