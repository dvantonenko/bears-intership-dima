import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

export const Post = {
    actions: {
        async addPoster({ }, task) {
            await axios.post("http://localhost:3000/poster/add", task)
        },
        async deletePoster({ }, id) {
            await axios.post("http://localhost:3000/poster/delete", { id })
        },
        async getCurrentPosters({ commit }, obj) {
            const { currentPage, postersPerPage } = obj
            let response = await axios.get("http://localhost:3000/poster", { params: { currentPage, postersPerPage } });
            commit('currentPosters', response.data.posters)
        },
        async updatePoster({ commit }, poster) {
            const response = await axios.post("http://localhost:3000/poster/update", poster);
            commit('setAnswer', response.data.message)
        },
        async getPosterById({ commit }, id) {
            const response = await axios.get(`http://localhost:3000/poster/update/${id}`);
            commit('setCurrentPoster', response.data.poster.Item)
        },
        setLoading({ commit }, status) {
            commit('setLoading',status)
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
        setLoading(state,status ){
            state.isLoading=status
        }
    },
    state: {
        posters: [],
        currentPoster: { title: '', subtitle: '', description: '', src: '', id: null },
        answer: '',
        postersLength: 1,
        isLoading: false
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
        }

    },
}