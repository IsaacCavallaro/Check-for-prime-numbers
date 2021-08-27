const isPrime = require('./checkForPrime')

describe("false tests", () => {
    test('should return false', () => {
        expect(isPrime(0)).toBe(false)
        expect(isPrime(1)).toBe(false)
        expect(isPrime(12)).toBe(false)
    })
})

describe("true tests", () => {
    test('should return true', () => {
        expect(isPrime(2)).toBe(true)
        expect(isPrime(11)).toBe(true)
    })
})