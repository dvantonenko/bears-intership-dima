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
        expect(_.countPage(11, 3)).not.toContain(false)
        expect(_.countPage(11, 3)).not.toContain(null)

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

describe("CheckTests delete poster", () => {
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

describe("CheckTests update poster",()=>{
    beforeEach(()=>{
         poster = {
            title: "test title",
            subtitle: "test subtitle",
            description:"test discription",
            id : 1610876112375,
          };
          response = { message: "Post updated" }
          axios.post.mockReturnValue(response)
    })

    test("should return message", () =>{
        return _.updatePoster(poster).then(data=>{
            expect(data).toEqual(response)
            expect(data).toBeInstanceOf(Object)
        })
        
    })

    test("should return value async error with promise", async () => {
        return _.updatePoster().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
})



