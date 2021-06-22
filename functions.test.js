const { expect, test, describe } = require('@jest/globals')

const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions')

test('returnTwo should return 2', () => {
    expect(returnTwo()).toBe(2)
})

describe('greeting tests', () => {
    test('greeting should return hello james', () => {
        expect(greeting('James')).toBe('Hello, James')
    })
    test('geeting should return hello jill', () => {
        expect(greeting('Jill')).toBe('Hello, Jill')
    })
})

describe('math functions tests', () => {
    test('add should return 3', () => {
        expect(add(1, 2)).toEqual(3)
    })
    test('add should return 14', () => {
        expect(add(5, 9)).toEqual(14)
    })
    test('multiply should return 6', () => {
        expect(multiply(2, 3)).toEqual(6)
    })
    test('multiply should return a number', () => {
        expect(multiply(5, 7)).not.toBeNaN
    })
    test('divide should return 6', () => {
        expect(divide(12, 2)).toEqual(6)
    })
    test('divide should not return null', () => {
        expect(divide(10, 2)).not.toBeNull
    })
    test('subtract should return 5', () => {
        expect(subtract(10, 5)).toEqual(5)
    })
    test('subtract should return a number less than 10', () => {
        expect(subtract(6, 2)).toBeLessThan(10)
    })
})