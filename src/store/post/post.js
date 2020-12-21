import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

function setAlert(response, commit) {
    if (response.data.message) {
        commit('setSuccessAlert', response.data.message)
    } else if (response.data.errorMessage) {
        commit('setErrorAlert', response.data.errorMessage)
    }
}

export const Post = {
    actions: {
        async addPoster({ commit }, obj) {
            const response = await axios.post("http://localhost:3000/poster/add", obj)
            setAlert(response, commit)
        },
        async deletePoster({commit }, obj) {
            const response = await axios.post("http://localhost:3000/poster/delete", obj)
            setAlert(response, commit)
        },
        async getCurrentPosters({ commit }, obj) {
            const { currentPage, postersPerPage } = obj
            let response = await axios.get("http://localhost:3000/poster", { params: { currentPage, postersPerPage } });
            commit('currentPosters', response.data.posters)
        },
        async updatePoster({ commit }, poster) {
            const response = await axios.post("http://localhost:3000/poster/update", poster);
            setAlert(response, commit)
            commit('setAnswer', response.data.message)

        },
        async getPosterById({ commit }, id) {
            const response = await axios.get(`http://localhost:3000/poster/update/${id}`);
            commit('setCurrentPoster', response.data.Item)
        },
        setLoading({ commit }, status) {
            commit('setLoading', status)
        },
        clearMessages({ commit }) {
            commit('clearMessages')
        }
    },
    mutations: {
        currentPosters(state, obj) {
            state.posters = obj.queryResult
            state.postersLength = obj.postersLength
        },
        setCurrentPoster(state, currentPoster) {
            state.currentPoster = currentPoster
        },
        setAnswer(state, answer) {
            state.answer = answer
        },
        clearAnswer(state) {
            state.answer = ''
        },
        setLoading(state, status) {
            state.isLoading = status
        },
        setSuccessAlert(state, message) {
            state.successMessage = message
        },
        setErrorAlert(state, message) {
            state.errorMessage = message
        },
        clearMessages(state) {
            state.successMessage = ''
            state.errorMessage = ''
        }
    },
    state: {
        posters: [],
        currentPoster: { title: '', subtitle: '', description: '', src: '', id: null },
        answer: '',
        postersLength: 0,
        isLoading: false,
        successMessage: '',
        errorMessage: ''
    },
    getters: {
        currentPosters(state) {
            if (state.posters)
                return state.posters
        },
        currentPoster(state) {
            if (state.currentPoster)
                return state.currentPoster
        },
        getAnswer(state) {
            return state.answer
        },
        getLength(state) {
            return state.postersLength
        },
        getLoading(state) {
            return state.isLoading
        },
        getSuccessMessage(state) {
            return state.successMessage
        },
        getErrorMessage(state) {
            return state.errorMessage
        }

    },
}