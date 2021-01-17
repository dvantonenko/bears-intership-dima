import Vue from 'vue'
import axios from "axios";

let headers = {}
headers['Content-Type'] = 'application/json'
headers['Accept']='application/json'

let axiosParams = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: headers
})

axiosParams.interceptors.request.use(
    async config => {
        try {
            let token = JSON.parse(localStorage.getItem("awsAccessToken"))

            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`
            } else {
                throw new Error(`unauthenticated request to ${config.url}`)
            }

        } catch (e) {
            console.log(`unauthenticated request to ${config.url}`)
            alert("No authorization")
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axiosParams.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response && error.response.status === 401) {
            console.log('unauthorized, logging out ...')
        }
        return Promise.reject(error)
    })

export default axiosParams

