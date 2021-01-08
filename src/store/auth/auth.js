import axios from 'axios'

export const Auth = {
    actions: {
        async registerHandler({ commit }, obj) {
            const response = await axios.post("http://localhost:3000/auth/register", obj)
            const errorMessage = response.data.message
            if (errorMessage) {
                commit("setErrorAlert", errorMessage)
            }
            return response
        },
        async loginHandler({ commit }, obj) {
            const response = await axios.post("http://localhost:3000/auth/login", obj)
            const errorMessage = response.data.message
            if (errorMessage) {
                commit("setErrorAlert", errorMessage)
            }
            const token = response.data.accessToken
            if (token.length) {
                commit('setAuth', token)
            }
            return response
        },
        async logoutHandler({commit} , obj){

            const response = await axios.post("http://localhost:3000/auth/logout", obj)
        }
    },
    mutations: {
        setAuth(state, token) {
            state.isAuthenticated = token
        }
    },
    getters: {
        getAuth(state) {
            return state.isAuthenticated
        }
    },
    state: {
        isAuthenticated: false,

    }
}