const axios = require('axios')
class Lodash {
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
            return { message: "Post added successfully" }
        } catch (e) {
            console.log(e)
        }
    }
    
    async deletePoster(id) {
        const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/poster/delete`, id)
        return response
    }
}

module.exports = Lodash