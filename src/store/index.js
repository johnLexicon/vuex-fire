import Vue from 'vue'
import Vuex from 'vuex'
import {vuexfireMutations, firestoreAction} from 'vuexfire'
import {db} from '../firestoreConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    user: null
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    ...vuexfireMutations,
    ADD_USER: (state, payload) => {
      state.user = payload.user
    }
  },
  actions: {
    bindArticles: firestoreAction(({bindFirestoreRef}, userId) => {
      return bindFirestoreRef("articles", db.collection("users").doc(userId).collection('articles'))
    }),
    addArticle: firestoreAction((context, payload) => {
      const {userId, article} = payload
      return db.collection('users').doc(userId).collection('articles').add(article)
    }),
    removeArticle: firestoreAction((context, payload) => {
      const {userId, articleId} = payload
      return db.collection('users').doc(userId).collection('articles').doc(articleId).delete()
    }),
    addUser: ({commit}, user) => {
      commit('ADD_USER', {user})
    }
  },
  modules: {
  }
})
