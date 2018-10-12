/**
 * Mocking client-server processing
 */

export default {
  getProducts: cb => fetch("https://tech.work.co/shopping-cart/products.json")
    .then(r => r.json())
    .then(cb),
  buyProducts: (payload, cb) => {
    // simulate successful/failed transaction
    const success = true

    const response = success ? {
      status: 200,
      message: 'Products successfully bought',
    } : {
      status: 503,
      message: 'The server is unavailable',
    }

    setTimeout(() => cb(response), 3000)
  }
}
