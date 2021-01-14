import axios from 'axios'

export const Auth = {
    actions: {
        async registerHandler({ commit }, obj) {
            const response = await axios.post("https://vh1mrjibjd.execute-api.us-east-2.amazonaws.com/dev/auth/register", obj)
            const errorMessage = response.data.message

            if (errorMessage) {
                commit("setErrorAlert", errorMessage)
            }
            return response
        },
        async loginHandler({ commit }, obj) {
            const response = await axios.post("https://vh1mrjibjd.execute-api.us-east-2.amazonaws.com/dev/auth/login", obj)
            const errorMessage = response.data.message
            if (errorMessage) {
                commit("setErrorAlert", errorMessage)
            }
            const token = response.data.accessToken
            const username = response.data.username
            if (token.length) {
                commit('setAuth', token)
                commit('setUsername',username)
            }
            return response
        },
        async logoutHandler({commit} ){
            const response = await axios.post("http://localhost:3000/auth/logout")
        }
    },
    mutations: {
        setAuth(state, token) {
            state.isAuthenticated = token
        },
        setUsername(state , username){
            state.username = username
        }
    },
    getters: {
        getAuth(state) {
            return state.isAuthenticated
        },
        getUsername(state){
            return state.username
        }
    },
    state: {
        isAuthenticated: false,
        username : ''

    }
}