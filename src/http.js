

export const http = () => {

    const request = async (url, method = "GET", body = null, headers = {}) => {
        try {

            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, { method, body, headers })
            const data = await response.json()//получаем ответ

            if (!response.ok) {
                throw new Error('Что-то пошло не так')
            }

            return data
        } catch (e) {
            console.log('Catch', e.message)
            throw e
        }
    }
    return {request}
}

module.export = http