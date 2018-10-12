import cart from './cart'

describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      addedIds: [],
      quantityById: {},
      visible: false,
      processing: false,
      error: {},
    }

    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('should handle CHECKOUT_REQUEST action', () => {
      expect(cart({}, { type: 'CHECKOUT_REQUEST' })).toEqual({processing: true})
    })

    it('should handle CHECKOUT_FAILURE action', () => {
      const state = {
        ...initialState,
        processing: true,
      }

      const err = {
        status: 404,
        message: 'not found'
      }

      expect(cart(initialState, { type: 'CHECKOUT_FAILURE', error: err })).toEqual({
        ...initialState,
        processing: false,
        error: err
      })
    })

    it('should handle ADD_TO_CART action', () => {
      expect(cart(initialState, { type: 'ADD_TO_CART', productId: 1 })).toEqual({
        addedIds: [ 1 ],
        quantityById: { 1: 1 },
        visible: false,
        processing: false,
        error: {},
      })
    })

    it('should handle REMOVE_FROM_CART action', () => {
      expect(cart(initialState, { type: 'REMOVE_FROM_CART', productId: 1, nextQuantity: 2 }))
        .toEqual(initialState)
      expect(cart(initialState, { type: 'REMOVE_FROM_CART', productId: 1, nextQuantity: 0 }))
        .toEqual(initialState)
    })

    describe('when product is already in cart', () => {
      let state
      beforeEach(() => {
        state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 1 },
          visible: false,
          processing: false,
          error: {},
        }
      })

      it('should handle ADD_TO_CART action', () => {
        expect(cart(state, { type: 'ADD_TO_CART', productId: 2 })).toEqual({
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 2 },
          visible: false,
          processing: false,
          error: {},
        })
      })

      it('should handle REMOVE_FROM_CART action', () => {
        expect(cart(state, { type: 'REMOVE_FROM_CART', productId: 1, nextQuantity: 0 }))
          .toEqual({
            addedIds: [ 2 ],
            quantityById: { 2: 1 },
            visible: false,
            processing: false,
            error: {},
          })

        expect(cart(state, { type: 'REMOVE_FROM_CART', productId: 2, nextQuantity: -1 }))
          .toEqual({
            addedIds: [ 1 ],
            quantityById: { 1: 1 },
            visible: false,
            processing: false,
            error: {},
          })
      })
    })
  })
})




