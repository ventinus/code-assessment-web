import reducer, * as products from './products'

const productFactory = (
  id = 1,
  inventory = 2,
  price = 10,
  currency = 'USD',
) => ({
  id,
  inventory,
  price,
  currency,
  title: `Product ${id}`,
  img: {
    alt: `Product ${id} watch`,
    src: 'test-file-stub'
  },
})

describe('reducers', () => {
  describe('products', () => {
    let state

    describe('when products are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_PRODUCTS',
          products: [
            {
              id: 1,
              productTitle: 'Product 1',
              inventory: 2,
              price: {
                value: 10,
                currency: 'USD'
              }
            },
            {
              id: 2,
              productTitle: 'Product 2',
              inventory: 1,
              price: {
                value: 10,
                currency: 'USD'
              }
            }
          ]
        })
      })

      it('contains the products from the action', () => {
        expect(products.getProduct(state, 1)).toEqual(productFactory(1))
        expect(products.getProduct(state, 2)).toEqual(productFactory(2, 1))
      })

      it ('contains no other products', () => {
        expect(products.getProduct(state, 3)).toEqual(undefined)
      })

      it('lists all of the products as visible', () => {
        expect(products.getVisibleProducts(state)).toEqual([
          productFactory(1),
          productFactory(2, 1)
        ])
      })

      describe('when an item is added to the cart', () => {
        beforeEach(() => {
          state = reducer(state, { type: 'ADD_TO_CART', productId: 1 })
        })

        it('the inventory is reduced', () => {
          expect(products.getVisibleProducts(state)).toEqual([
            productFactory(1, 1),
            productFactory(2, 1)
          ])
        })
      })

      describe('when an item is removed from the cart', () => {
        it('returns the items back to products inventory', () => {
          state = reducer(state, { type: 'REMOVE_FROM_CART', productId: 2, change: 2 })
          expect(products.getProduct(state, 2).inventory).toBe(3)
        })
      })
    })
  })
})
