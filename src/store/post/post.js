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
            let storage = JSON.parse(localStorage.getItem('listId')) || []
            storage.push(obj.task.id)
            localStorage.setItem('listId', JSON.stringify(storage))
            commit('addToListId', obj.task.id)
            setAlert(response, commit)
        },
        async deletePoster({ commit }, obj) {
            const response = await axios.post("http://localhost:3000/poster/delete", obj)
            console.log(obj)
            console.log(JSON.parse(localStorage.getItem('listId')) || [])
            function removeLocalStorageValues() {
                var storage = JSON.parse(localStorage.getItem("listId"));
                const index = storage.findIndex(item => item === Number(obj.id))
                storage.splice(index , 1 )
                localStorage.setItem('listId', JSON.stringify(storage))
            }
            removeLocalStorageValues()
            setAlert(response, commit)
        },
        async getCurrentPosters({ commit }, obj) {

            const { currentPage, postersPerPage } = obj
            let listId = JSON.parse(localStorage.getItem('listId')) || []
            let response = await axios.get("http://localhost:3000/poster", { params: { currentPage, postersPerPage, listId } });
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
        },
        addToListId(state, id) {
            console.log(id)
            state.listId.push(id)
        }
    },
    state: {
        posters: [],
        currentPoster: { title: '', subtitle: '', description: '', src: '', id: null },
        answer: '',
        postersLength: 0,
        isLoading: false,
        successMessage: '',
        errorMessage: '',
        listId: []
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
        },
        getListId(state) {
            return state.listId
        }

    },
}