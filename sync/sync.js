class Lodash {
    compact(array) {
        return array.filter(val => !!val)//удалет false и undefined
    }
    groupBy(array, prop) {
        return array.reduce((acc, i) => {
            const key = typeof prop === 'function' ? prop(i) : i[prop]//Math.floor(i)
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(i)
            return acc
        }, {})
    }
}

module.exports = Lodash
