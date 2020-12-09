import Vue from 'vue'
import Vuex from 'vuex'
import {Post} from '../post/post'
import {Widgets} from '../widgets/widgets'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Post,
        Widgets
      }
})