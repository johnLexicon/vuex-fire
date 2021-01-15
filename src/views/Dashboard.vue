<template>
  <div>
      <h1>
          Articles
      </h1>
      <div v-if="!user">
          <p>There are no articles</p>
      </div>
      <div v-else v-for="article in articles" :key="article.title">
          <Card :article="article"/>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Card from '../components/cards/Card';
export default {
    name: 'Dashboard',
    components: {
        Card
    },
    data() {
        return {
        }
    },
    computed: mapState(['user', 'articles'])
}
</script>

<style>
  .card {
    margin:1rem;
    background-color: orange;
    display: flex;
    color: #fff;
  }
  #addUser {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background: orange;
      text-align: center;
      vertical-align: middle;
  }
  #addUser a{
      color:#fff;
  }
  #addUser i{
    padding-top: 20px;
    padding-left: 5px;
  }
</style>