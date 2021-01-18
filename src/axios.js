import VueJwtDecode from 'vue-jwt-decode'
import axios from "axios";

let headers = {}
headers['Content-Type'] = 'application/json'
headers['Accept'] = 'application/json'
headers['Authorization'] = false

let expirationDate = null

let axiosParams = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: headers
})

async function checkTime(exp) {
    let dateInMin = Math.trunc(Date.now() / 1000)
    if ((exp - dateInMin) <= 900) {
        console.log("time over")
        const refreshToken = JSON.parse(localStorage.getItem("awsRefreshToken"))
        const email = JSON.parse(localStorage.getItem('awsEmail'))
        const result = await axios.post("https://vh1mrjibjd.execute-api.us-east-2.amazonaws.com/dev/auth/refreshtoken", { refreshToken, email })
        localStorage.setItem('awsAccessToken', JSON.stringify(result.data.accessToken))
        localStorage.setItem('awsRefreshToken', JSON.stringify(result.data.refreshToken))
    } else {
        console.log('time left ', (exp - Math.trunc(Date.now() / 1000)))
    }
}

axiosParams.interceptors.request.use(
    async config => {
        try {
            let token = JSON.parse(localStorage.getItem("awsAccessToken"))
            if (token) {
                expirationDate = VueJwtDecode.decode(`${token}`).exp
                await checkTime(expirationDate)
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

