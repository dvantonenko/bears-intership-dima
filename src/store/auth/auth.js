import axios from 'axios'
import { actionLS } from '../../utils/checkToken'
export const Auth = {
    actions: {
        async registerHandler({ commit }, obj) {
            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/auth/register`, obj)
            const errorMessage = response.data.message

            if (errorMessage) {
                commit("setErrorAlert", errorMessage)
            }
            return response
        },
        async loginHandler({ commit }, obj) {
            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/auth/login`, obj)
            const errorMessage = response.data.message
            if (errorMessage) {
                commit("setErrorAlert", errorMessage)
            }
            const { email, accessToken, username, refreshToken } = response.data
            if (accessToken.length && username.length && refreshToken.length && email.length) {

                actionLS("save", accessToken, refreshToken, username, email)

                commit('setAuth', accessToken)
                commit('setUsername', username)
            }
            return response
        },
        async logoutHandler({ commit }) {
            let username = { email: JSON.parse(localStorage.getItem('awsEmail')) }
            if (username) {
                await axios.post(`${process.env.VUE_APP_BASE_URL}/auth/logout`, username)
                actionLS("remove")
            }
        }
    },
    mutations: {
        setAuth(state, token) {
            state.isAuthenticated = token
        },
        setUsername(state, username) {
            state.username = username
        }
    },
    getters: {
        getAuth(state) {
            return state.isAuthenticated
        },
        getUsername(state) {
            return state.username
        }
    },
    state: {
        isAuthenticated: false,
        username: ''

    }
}