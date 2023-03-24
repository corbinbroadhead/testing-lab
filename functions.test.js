const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

test("should return '2'.", () => {
    expect(returnTwo()).toEqual(2);
})

test("should return 'Hello, James.'", () => {
    expect(greeting('James')).toEqual('Hello, James.');
})

test("should return 'Hello, Jill.'", () => {
    expect(greeting('Jill')).toEqual('Hello, Jill.');
})

describe('Math functions', () => {

    test("should be a number", () => {
        expect(typeof add(3, 4)).toBe("number");
    })

    test("should return 3", () => {
        expect(add(1, 2)).toEqual(3);
    })

    test("should return 14", () => {
        expect(add(5, 9)).toEqual(14);
    })

    test("should return 88", () => {
        expect(multiply(22, 4)).toEqual(88);
    })

    test("should return 40", () => {
        expect(multiply(5, 8)).toEqual(40);
    })

    test("should return a string saying we can't do that.", () => {
        expect(divide(50, 0)).toEqual("we can't do that silly.");
    })

    test("should return 2", () => {
        expect(divide(22, 11)).toEqual(2);
    })

    test("should return 12", () => {
        expect(divide(60, 5)).toEqual(12);
    })

    test("should return 20", () => {
        expect(subtract(29, 9)).toEqual(20);
    })

    test("should return 2002", () => {
        expect(subtract(2022, 20)).toEqual(2002);
    })
});