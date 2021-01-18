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
            const response = await axios.post("http://localhost:3000/auth/login", obj)
            const errorMessage = response.data.message
            if (errorMessage) {
                commit("setErrorAlert", errorMessage)
            }
            const { email, accessToken, username, refreshToken } = response.data
            if (accessToken.length && username.length && refreshToken.length) {
                localStorage.setItem("awsAccessToken", JSON.stringify(accessToken))
                localStorage.setItem("awsUsername", JSON.stringify(username))
                localStorage.setItem("awsRefreshToken", JSON.stringify(refreshToken))
                localStorage.setItem("awsEmail", JSON.stringify(email))

                commit('setAuth', accessToken)
                commit('setUsername', username)
            }
            return response
        },
        async logoutHandler({ commit }) {
            localStorage.removeItem("awsUsername")
            localStorage.removeItem("awsAccessToken")
            localStorage.removeItem("awsRefreshToken")
            localStorage.removeItem("awsEmail")

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