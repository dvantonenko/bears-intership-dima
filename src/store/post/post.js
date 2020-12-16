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
        async getAllPosters({ commit }) {
            let response = await axios.get("http://localhost:3000/poster");
            commit('allPosters', response.data.posters)
        },
        async updatePoster({ commit }, poster) {
            const response = await axios.post("http://localhost:3000/poster/update", poster);
            commit('setAnswer', response.data.message)
        },
        async getPosterById({ commit }, id) {
            const response = await axios.get(`http://localhost:3000/poster/${id}`);
            commit('setCurrentPoster', response.data.poster.Item)
        }
    },
    mutations: {
        allPosters(state, response) {
            state.posters = response
        },
        setCurrentPoster(state, currentPoster) {
            state.currentPoster = currentPoster
        },
        setAnswer(state, answer) {
            state.answer = answer
        },
        clearAnswer(state) {
            state.answer = ''
        }
    },
    state: {
        posters: [],
        currentPoster: { title: '', subtitle: '', description: '', src: '', id: null },
        answer: ''
    },
    getters: {
        allPosters(state) {
            return state.posters
        },
        currentPoster(state) {
            if (state.currentPoster)
                return state.currentPoster
        },
        getAnswer(state) {
            return state.answer
        }

    },
}