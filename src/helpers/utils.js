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
