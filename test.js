const Lodash = require('./Lodash')
const axios = require('axios')

jest.mock('axios')
const _ = new Lodash()

describe("Lodash count page", () => {
    test('function should be defined', () => {
        expect(_.countPage).toBeDefined()
        expect(_.countPage).not.toBeUndefined()
    })

    test("Check if correct type", () => {
        expect(_.countPage(11, 3)).not.toContain(false)
        expect(_.countPage(11, 3)).not.toContain(null)

    })

    test("Check if corrent answer", () => {
        expect(_.countPage(11, 3)).toEqual([1, 2, 3, 4])

    })

})

describe("Lodash add poster", () => {

    beforeEach(() => {
        response = { message: "Post added successfully" }
        axios.post.mockReturnValue(response)
    })

    test("should return response message from backend", () => {

        return _.addPoster().then(data => {
            expect(data).toEqual(response)

        })
    })

    test("should return object value", async () => {

        return _.addPoster().then(data => {
            expect(data).toBeInstanceOf(Object)
        })
    })
    test("should return object value", async () => {
        return _.addPoster().then(data => {
            expect(data).not.toBeInstanceOf(Array)
        })
    })

    test("should return value async error with promise", async () => {
        return _.addPoster().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

})

describe("Lodash delete poster", () => {
    beforeEach(() => {
     id = { id : 1610876112375}
     response = { message: "Post successfully deleted" }
     axios.post.mockReturnValue(response)
    })

    test("should return response message from backend", () => {
        return _.deletePoster(id).then(data => {
            expect(data).toBeInstanceOf(Object)
            expect(data).toEqual(response)
        })
    })

    test("should return value async error with promise", async () => {
        return _.deletePoster(id).catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
})



