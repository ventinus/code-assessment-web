import { SALES_TAX } from '../constants/settings'

export const hasPresence = item => {
  switch (typeof item) {
    case 'number':
      return true
    case 'string':
      return item.length > 0
    case 'object':
      if (Array.isArray(item)) {
        return item.length > 0
      } else if (item === null) {
        return false
      }
      return Object.keys(item).length > 0
    case 'undefined':
      return false
    default:
      return !!item
  }
}

export const sum = (a, b) => a + b

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

export const removeFromArr = (arr, val) => {
  const index = arr.indexOf(val)
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
  ]
}

export const addSalesTax = n => ({
  tax: (n * SALES_TAX).toFixed(2),
  total: (n + n * SALES_TAX).toFixed(2),
})
