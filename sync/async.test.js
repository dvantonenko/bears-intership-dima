const axios = require('axios')
const Ajax = require('./async')


jest.mock("axios")

describe("Ajax : echo", () => {
    test("should return value async", async () => {
        const data = await Ajax.echo("some data")
        expect(data).toBe('some data')
    })

    test("should return value async with promise", async () => {
        return Ajax.echo("some data").then(data => {
            expect(data).toBe('some data')
        })
    })


    test("should return value async error with promise", async () => {
        return Ajax.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })



    test("should return value async error with promise", async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('error')
        }

    })
})

describe("AJAX : get", () => {

    let data;
    let todos;

    beforeEach(() => {
        todos = [{ id: 1, title: "todo 1", completed: false }]
        response = {
            data: {
                todos
            }
        }
    })
    test("should return data from backend", () => {
        axios.get.mockReturnValue(response)//делает запрос ,но не делает на сервер ,а вернет response который мы опредилим
        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })

    })
})