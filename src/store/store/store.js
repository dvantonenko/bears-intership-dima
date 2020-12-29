import Vue from 'vue'
import Vuex from 'vuex'
import {Post} from '../post/post'
import {Widgets} from '../widgets/widgets'
import {Auth} from "../auth/auth"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Post,
        Widgets,
        Auth
      }
})