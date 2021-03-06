import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const removeFromCartUnsafe = (productId, quantity, change) => ({
  type: types.REMOVE_FROM_CART,
  nextQuantity: quantity - change,
  change,
  productId,
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeFromCart = (productId, change = 1) => (dispatch, getState) => {
  const quantity = getState().cart.quantityById[productId]
  if (quantity > 0) {
    dispatch(removeFromCartUnsafe(productId, quantity, change))
  }
}

export const checkout = products => (dispatch, getState) => {
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, res => {
    if (res.status === 200) {
      dispatch({
        type: types.CHECKOUT_SUCCESS
      })
    } else {
      dispatch({
        type: types.CHECKOUT_FAILURE,
        error: res
      })
    }
  })
}

export const toggleCartVisibility = () => ({
  type: types.TOGGLE_CART_VISIBILITY,
})
