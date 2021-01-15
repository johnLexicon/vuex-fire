<template>
  <div>
      <h1>
          Add Article
      </h1>

    <form @submit.prevent="add" class="text-center border border-light p-5">
        <!-- Title -->
        <input type="text" v-model="article.title" required class="form-control mb-4" placeholder="Title">

        <!-- Body -->
        <input type="text" v-model="article.body" required class="form-control mb-4" placeholder="Content">

        <!-- Sign in button -->
        <button class="btn orange btn-block" type="submit">Add</button>

    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import {v4 as uuidv4} from 'uuid'
export default {
    name: 'AddArticle',
    components: {
    },
    data() {
        return {
            article: {
                title: '',
                body: ''
            }
        }
    },
    computed: mapState(['user']),
    methods: {
        ...mapActions(['addArticle']),
        add(){
            try{
                const newArticle = {id: uuidv4(), title: this.article.title, body: this.article.body}
                const payload = {userId: this.user.uid, article: newArticle}
                this.addArticle(payload)
                this.article = {title: '', body: ''}
            }catch(err){
                console.log(err.message)
            }
        }
    }
}
</script>

<style>
</style>