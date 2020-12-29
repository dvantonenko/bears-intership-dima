import Vue from 'vue'
import Vuex from 'vuex'

export const Auth = {
actions :{},
mutations:{
    setAuth(state,status){
        state.isAuthenticated = status
    }
},
getters:{
    getAuth(state){
        return state.isAuthenticated
    }
},
state:{
    isAuthenticated : false
}
}