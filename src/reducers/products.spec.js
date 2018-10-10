import reducer, * as products from './products'

// TODO: handle REMOVE_FROM_CART action

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
        expect(products.getProduct(state, 1)).toEqual({
          currency: "USD",
          id: 1,
          img: {
            alt: "Product 1 watch",
            src: "test-file-stub"
          },
          inventory: 2,
          price: 10,
          title: "Product 1"
        })
        expect(products.getProduct(state, 2)).toEqual({
          currency: "USD",
          id: 2,
          img: {
            alt: "Product 2 watch",
            src: "test-file-stub"
          },
          inventory: 1,
          price: 10,
          title: "Product 2"
        })
      })

      it ('contains no other products', () => {
        expect(products.getProduct(state, 3)).toEqual(undefined)
      })

      it('lists all of the products as visible', () => {
        expect(products.getVisibleProducts(state)).toEqual([
          {
            currency: "USD",
            id: 1,
            img: {
              alt: "Product 1 watch",
              src: "test-file-stub"
            },
            inventory: 2,
            price: 10,
            title: "Product 1"
          }, {
            currency: "USD",
            id: 2,
            img: {
              alt: "Product 2 watch",
              src: "test-file-stub"
            },
            inventory: 1,
            price: 10,
            title: "Product 2"
          }
        ])
      })

      describe('when an item is added to the cart', () => {

        beforeEach(() => {
          state = reducer(state, { type: 'ADD_TO_CART', productId: 1 })
        })

        it('the inventory is reduced', () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
            currency: "USD",
            id: 1,
            img: {
              alt: "Product 1 watch",
              src: "test-file-stub"
            },
            inventory: 1,
            price: 10,
            title: "Product 1"
          }, {
            currency: "USD",
            id: 2,
            img: {
              alt: "Product 2 watch",
              src: "test-file-stub"
            },
            inventory: 1,
            price: 10,
            title: "Product 2"
          }
          ])
        })

      })

    })
  })
})
