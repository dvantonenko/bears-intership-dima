import VueJwtDecode from 'vue-jwt-decode'
import axios from "axios";
import { checkTimeRemaining } from './utils/checkToken'

let headers = {}
headers['Content-Type'] = 'application/json'
headers['Accept'] = 'application/json'
headers['Authorization'] = false

let expirationDate = null

let axiosParams = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: headers
})

axiosParams.interceptors.request.use(
    async config => {
        try {
            let token = JSON.parse(localStorage.getItem("awsAccessToken"))
            if (token) {
                expirationDate = VueJwtDecode.decode(`${token}`).exp
                await checkTimeRemaining(expirationDate)
                config.headers['Authorization'] = `Bearer ${token}`
            } else {
                throw new Error(`unauthenticated request to ${config.url}`)
            }
        } catch (e) {
            console.log(e)
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

