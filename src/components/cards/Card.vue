<template>
  <div class="card">
      <h3>{{ article.title }}</h3>
      <p>{{ article.body }}</p>
      <a @click.prevent="remove(article.id)" href="#"><i id="delIco" class="fas fa-user-times fa-2x"></i></a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'UserCard',
  props: ['article'],
  computed: mapState(['user']),
  methods: {
    ...mapActions(['removeArticle']),
    remove(articleId) {
      try{
        const payload = {userId: this.user.uid, articleId}
        this.removeArticle(payload)
      }catch(err){
        console.log(err.message)
      }
    }
  }
}
</script>

<style scoped>
  .card {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 2rem;
  }
  #delIco{
      color: rgb(180, 11, 11)
  }
</style>