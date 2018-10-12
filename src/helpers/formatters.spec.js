import * as formatters from './formatters'

describe('toMoney', () => {
  it('should prefix the number with the correct symbol', () => {
    [
      { name: 'USD', sym: '$' },
      { name: 'EUR', sym: '€' },
      { name: 'JPY', sym: 'JP¥' },
      { name: 'GBP', sym: '£' },
    ].forEach(set => {
      expect(formatters.toMoney(10.99, set.name)).toBe(`${set.sym}10.99`)
    })
  })
})
