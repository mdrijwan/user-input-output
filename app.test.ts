import { lowerUpperCase, upperLowerCase } from './app';

describe('testing funccions', () => {
    test('converts string to alternate lower upper case', () => {
        expect(lowerUpperCase('helloworld')).toBe('hElLoWoRlD')
    })
    
    test('converts string to alternate upper lower case', () => {
        expect(upperLowerCase('helloworld')).toBe('HeLlOwOrLd')
    })
})

