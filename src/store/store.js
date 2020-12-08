import Vue from 'vue'
import Vuex from 'vuex'
import {Post} from './post.js'
import {Index} from './index.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Post,
        Index
      }
})