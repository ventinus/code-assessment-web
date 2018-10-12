import omit from 'lodash.omit'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS,
  TOGGLE_CART_VISIBILITY,
} from '../constants/ActionTypes'

import { removeFromArr } from '../helpers'

const initialState = {
  addedIds: [],
  quantityById: {},
  visible: false,
  processing: false,
  error: {},
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
      return action.nextQuantity < 1 ? removeFromArr(state, productId) : state
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
      if (!state[productId]) {
        return state
      }

      return action.nextQuantity > 0 ? {
        ...state,
        [productId]: action.nextQuantity
      } : omit(state, productId)
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
      return {
        ...state,
        processing: true,
      }
    case CHECKOUT_SUCCESS:
      return initialState
    case CHECKOUT_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
      }
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        visible: !state.visible
      }
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        visible: state.visible,
        error: state.error,
        processing: state.processing,
      }
  }
}

export default cart
