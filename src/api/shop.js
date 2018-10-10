/**
 * Mocking client-server processing
 */

const TIMEOUT = 100

export default {
  getProducts: cb => fetch("https://tech.work.co/shopping-cart/products.json")
    .then(r => r.json())
    .then(cb),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
