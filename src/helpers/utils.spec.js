import * as utils from './utils'

describe('hasPresence', () => {
  it('should check presence of all data types', () => {
    const samples = [[], [1], 1, 0, -1, '' ,'asdf', {}, {asdf: 'asdf'}, null, undefined, true, false]
    expect(samples.map(utils.hasPresence)).toEqual([false, true, true, true, true, false, true, false, true, false, false, true, false])
  })
})

describe('sum', () => {
  it('should add 2 numbers together', () => {
    expect(utils.sum(3, 4)).toBe(7)
  })
})

describe('capitalize', () => {
  it('should capitalize the first letter in a string', () => {
    const samples = [['string String string'], ['string']]
    const answers = ['String string string', 'String']

    expect(samples.map(args => utils.capitalize.apply(null, args))).toEqual(answers)
  })
})

describe('removeFromArr', () => {
  it('should remove an item from an array', () => {
    const arr = [1,2,3,4,5]
    expect(utils.removeFromArr(arr, 4)).toEqual([1,2,3,5])
    expect(utils.removeFromArr(arr, 7)).toEqual([1,2,3,4,5])
  })
})

describe('addSalesTax', () => {
  it('should use the constant SALES_TAX to adjust price', () => {
    expect(utils.addSalesTax(10)).toEqual({tax: "0.50", total: "10.50"})
    expect(utils.addSalesTax(0)).toEqual({tax: "0.00", total: "0.00"})
  })
})
