import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

export const Post = {
    actions: {
        async addPoster({}, task) {
            await axios.post("http://localhost:3000/poster/add", task);
        },
        async deletePoster({}, obj ) {
            const {id , title} = obj
            await axios.post("http://localhost:3000/poster/delete", {id , title})
        },
        async getAllPosters({ commit }) {
            let response = await axios.get("http://localhost:3000/poster");
            commit('allPosters', response.data.posters)
        },
        async updatePoster({}, poster){
        
            await axios.post("http://localhost:3000/poster/update", poster);
        }
    },
    mutations: {
        allPosters(state, response) {
            state.posters = response
        },
    },
    state: {
        posters: []
    },
    getters: {
        allPosters(state) {
            return state.posters
        }
    },
}