const axios = require('axios')

class CheckFunctions {
    countPage(getLength, postersPerPage, pageNumbers) {
        pageNumbers = []
        for (let i = 1; i <= Math.ceil(getLength / postersPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers
    }

    async addPoster(obj) {
        try {
            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/poster/add`, obj)
            return response
        } catch (e) {
            return e
        }
    }

    async deletePoster(id) {
        try {
            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/poster/delete`, id)
            return response
        } catch (e) {
            return e
        }

    }
    async updatePoster(poster) {
        try {
            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/poster/update`, poster);
            return response
        } catch (e) {
            return e
        }
    }
    async getPosterById(id) {
        try {
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/poster/update/${id}`);
            console.log('response',response)
            return response
        } catch (e) {
            console.log('error',e)
            return e
        }

    }
}

module.exports = CheckFunctions