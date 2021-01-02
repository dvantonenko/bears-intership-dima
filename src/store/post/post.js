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
        async deletePoster({ commit }, obj) {
            const response = await axios.post("http://localhost:3000/poster/delete", obj)
            setAlert(response, commit)
        },
        async getCurrentPosters({ commit }, obj) {
            const { currentPage, postersPerPage, lastElemKey } = obj
            let response = await axios.get("http://localhost:3000/poster", { params: { currentPage, postersPerPage, lastElemKey } });

            if (response.data.posters.queryResult.length) {
                commit('currentPosters', response.data.posters)
                commit('setLastKey', response.data.posters.lastElemKey)

            } else {
                commit('setLastKey', response.data.posters.lastElemKey)
            }
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
        },
    },
    mutations: {
        currentPosters(state, obj) {
            if (obj.queryResult) {
                state.posters = state.posters.concat(obj.queryResult)
            } else { return }
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
        setLastKey(state, lastElemKey) {
            if (lastElemKey.id) {
                state.lastElemKey = lastElemKey.id
            } else if (lastElemKey == 0) { state.lastElemKey = 0 }
        },
        clearPosters(state) {
            state.posters = []
            state.lastElemKey=null
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
        lastElemKey: null
    },
    getters: {
        currentPosters(state) {
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
        getLastElemKey(state) {
            return state.lastElemKey
        }

    },
}