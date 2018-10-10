
const currencyMap = {
  USD: '$',
  EUR: '€',
  JPY: 'JP¥',
  GBP: '£',
}

export const toMoney = (n, currency = 'USD') => `${currencyMap[currency]}${parseFloat(n).toFixed(2)}`
