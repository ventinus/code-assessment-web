/**
 * Mocking client-server processing
 */

const TIMEOUT = 100

export default {
  getProducts: cb => fetch("http://tech.work.co/shopping-cart/products.json")
    .then(r => r.json())
    .then(cb),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
