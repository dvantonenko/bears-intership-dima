const { map } = require('./mock')

describe("Map function", () => {
    let array;
    let fn;
    beforeEach(() => {
        array = [1, 2, 3, 5]
        fn = jest.fn(x => x ** 2)//работает как обычная функция но с функцияоналом jesta
        // т.е. создает псевдо функцию
        map(array, fn)
    })

    test('should call callback', () => {
        expect(fn).toBeCalled()
    })

    test("should call 5 times", () => {
        expect(fn).toBeCalledTimes(5)//сколько раз должна быть вызвана функция
        expect(fn.mock.calls.length).toBe(5)
    })

    test("should pow 2 each element", () => {
        expect(fn.mock.results[0].value).toBe(1)
        expect(fn.mock.results[1].value).toBe(4)
        expect(fn.mock.results[2].value).toBe(9)
        expect(fn.mock.results[3].value).toBe(25)
    })


    test("should fn mock", () => {

        fn.mockReturnValueOnce(100)//при первом вызове должна пвернуть 100
            .mockReturnValueOnce(200)//при втором вернуть 200
            .mockReturnValue('42')//при остальных 42
        expect(fn()).toBe(100)
        expect(fn()).toEqual(200)
        expect(fn()).toEqual('42')
        expect(fn()).toEqual('42')
    })

 
})