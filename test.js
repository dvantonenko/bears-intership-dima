const CheckTests = require('./CheckTests')
const axios = require('axios')

jest.mock('axios')
const _ = new CheckTests()

describe("CheckTests count page", () => {
    test('function should be defined', () => {
        expect(_.countPage).toBeDefined()
        expect(_.countPage).not.toBeUndefined()
    })

    test("Check if correct type", () => {
        expect(_.countPage(11, 3)).not.toBe(false)
        expect(_.countPage(11, 3)).not.toBe(null)
        expect(_.countPage(11, 3)).not.toBe("")
    })

    test("Check if corrent answer", () => {
        expect(_.countPage(11, 3)).toEqual([1, 2, 3, 4])

    })

})

describe("CheckTests add poster", () => {

    beforeEach(() => {
        response = { message: "Post added successfully" }
        axios.post.mockReturnValue(response)
    })

    test("should return response message from backend",() => {

        return  _.addPoster().then(data => {
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
            expect(data).not.toBeInstanceOf(String)
        })
    })

    test("should return value async error with promise", async () => {
        return _.addPoster().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

})

describe("CheckTests delete poster", () => {
    beforeEach(() => {
        id = { id: 1610876112375 }
        response = { message: "Post successfully deleted" }
        axios.post.mockReturnValue(response)
    })

    test("should return response message from backend", () => {
        return _.deletePoster(id).then(data => {
            expect(data).toBeInstanceOf(Object)
            expect(data).toEqual(response)
        })
    })
    test("should return object value ", () => {
        return _.deletePoster(id).then(data => {
            expect(data).toBeInstanceOf(Object)
            expect(data).not.toBeInstanceOf(String)
            expect(data).not.toBeInstanceOf(Array)
        })
    })
    test("should return value async error with promise", async () => {
        return _.deletePoster().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
    test("should return value async error with null", async () => {
        return _.deletePoster(null).catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

})

describe("CheckTests update poster", () => {
    beforeEach(() => {
        poster = {
            title: "test title",
            subtitle: "test subtitle",
            description: "test discription",
            id: 1610876112375,
        };
        response = { message: "Post updated" }
        axios.post.mockReturnValue(response)
    })

    test("should return response message from backend", async () => {
        return _.updatePoster(poster).then(data => {
            expect(data).toEqual(response)
            expect(data).toBeInstanceOf(Object)
        })

    })

    test("should return value async error with promise", async () => {
        return _.updatePoster().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
    test("should return value async error with promise if null ", async () => {
        return _.updatePoster(null).catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
        
    })
    test("should return value async error with promise if empty string ", async () => {
        return _.updatePoster('').catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
        
    })
 
})

describe("CheckTest getById", () => {
    beforeEach(() => {
        id = 1610202280306
        response = {
            data: {
                Item: {
                    title: "title", subtitle: "subtitle", discription: "discription"
                }
            }
        }
        axios.get.mockReturnValue(response)
    })
    test("should return value", async () => {
        return _.getPosterById(id).then(data => {
            expect(data).toEqual(response)
        })
    })
    test("should return error", async () => {
        return _.getPosterById().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
    test("should return error with null", async () => {
        return _.getPosterById(null).catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

    test("should return value async", async () => {
        const data = await _.getPosterById()
        expect(data).not.toBe(null)
        expect(data).not.toContain(false)
        expect(data).not.toContain(null)
        expect(data).not.toContain("")
        expect(data).not.toContain(0)
    })
})
