const { sum, nativeNull } = require('./example')

describe("Sun Function", () => {
    test('example ', () => {
        expect(sum(2, 4)).toBe(6)
    })

    test('sum should return value ', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
        expect(sum(2, 1)).toBeLessThan(4)
        expect(sum(2, 2)).toBeLessThanOrEqual(4)
    })

    test("sun should values correct", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)

    })
})

describe("Native null function", () => {

    test("should return false value null", () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()// undefined , null , 0 , "" не сработает блок
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()//не пусткая строка не Undefined не null
        expect(nativeNull()).not.toBeUndefined()
    })
})