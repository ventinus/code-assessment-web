import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  TOGGLE_CART_VISIBILITY,
} from '../constants/ActionTypes'

import { removeFromArr } from '../helpers'

const initialState = {
  addedIds: [],
  quantityById: {},
  visible: false,
}

const addedIds = (state = initialState.addedIds, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(productId) !== -1) {
        return state
      }
      return [ ...state, productId ]
    case REMOVE_FROM_CART:
      return action.count <= 1 ? removeFromArr(state, productId) : state
    case REMOVE_ALL_FROM_CART:
      return removeFromArr(state, productId)
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        [productId]: Math.max(state[productId] - 1, 0)
      }
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        [productId]: 0
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        visible: !state.visible
      }
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        visible: state.visible
      }
  }
}

export default cart
