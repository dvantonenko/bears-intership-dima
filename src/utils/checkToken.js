import axios from "axios"

async function checkTimeRemaining(exp) {
    let dateInMin = Math.trunc(Date.now() / 1000)
    if ((exp - dateInMin) <= 900) {
        console.log("time over")
        const { refreshToken, email } = getToken()
        const { newAccessToken, newRefreshToken } = await refreshTokenRequest(refreshToken, email)
        setNewTokens(newAccessToken, newRefreshToken)
    } else {
        console.log('time left ', (exp - Math.trunc(Date.now() / 1000)))
    }

}

function getToken() {
    const refreshToken = JSON.parse(localStorage.getItem("awsRefreshToken"))
    const email = JSON.parse(localStorage.getItem('awsEmail'))
    if (refreshToken && email) {
        return { refreshToken, email }
    }
}

async function refreshTokenRequest(refreshToken, email) {
    const result = await axios.post(`${process.env.VUE_APP_BASE_URL}/auth/refreshtoken`, { refreshToken, email })
    let newAccessToken = result.data.accessToken
    let newRefreshToken = result.data.refreshToken
    return { newAccessToken, newRefreshToken }
}

function setNewTokens(newAccessToken, newRefreshToken) {
    localStorage.setItem('awsAccessToken', JSON.stringify(newAccessToken))
    localStorage.setItem('awsRefreshToken', JSON.stringify(newRefreshToken))

}

function actionLS(str, accessToken, refreshToken, username, email) {
    if (str == "save") {
        localStorage.setItem("awsAccessToken", JSON.stringify(accessToken))
        localStorage.setItem("awsRefreshToken", JSON.stringify(refreshToken))
        localStorage.setItem("awsUsername", JSON.stringify(username))
        localStorage.setItem("awsEmail", JSON.stringify(email))
    } else if (str == "remove") {
        localStorage.removeItem("awsAccessToken")
        localStorage.removeItem("awsRefreshToken")
        localStorage.removeItem("awsUsername")
        localStorage.removeItem("awsEmail")
    }

}

export { checkTimeRemaining, actionLS }