const Lodash = require("./sync");

let _ = new Lodash();
// toBe для примитивов toEqual для более сложных обьектов массивов итд
describe("Lodash compact", () => {

    let _ = new Lodash();
    let array;

    beforeEach(() => { array = [false, 40, 0, "", true, null, 'hello'] })//вызывается перед каждым тестом
    // beforeAll(()=>{})//вызывается перед всеми
    // afterEach(()=>{})//вызывается после каждого
    afterAll(() => { _ = new Lodash() })//вызывается после всех


    test('lodash should be defined', () => {
        expect(_.compact).toBeDefined()// проверка что функция определена
        expect(_.compact).not.toBeUndefined()// функция не должна быть undefined

    })

    test("удалить falsy values из массивa", () => {
        const result = [40, true, 'hello']
        expect(_.compact(array)).toEqual(result)
    })

    test("should NOT contain falsy values", () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain("")
        expect(_.compact(array)).not.toContain(null)

    })
})

describe("Lodash group by", () => {
    test("should be defined", () => {
        expect(_.groupBy).toBeDefined()// проверка что функция определена
        expect(_.groupBy).not.toBeUndefined()// функция не должна быть undefined

    })
    test("should group array item by Math.floor", () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test("should group elem items by length", () => {
        const array = ["one", "two", "three"]
        const result = {
            5: ["three"],
            3: ["one", "two"]
        }
        expect(_.groupBy(array, "length")).toEqual(result)

    })

    test("should not return array",()=>{
        expect(_.groupBy([],Math.trunc)).not.toBeInstanceOf(Array)
    })
})