import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  PRODUCT_REMOVE
} from '../productsActions'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function products (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_PRODUCTS_SUCCESS:
      // All done: set loading "false".
      return {
        ...state,
        loading: false,
        items: action.payload.products
      }

    case FETCH_PRODUCTS_ERROR:
      // The request failed, but it did stop, so set loading to "false".
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }

    case PRODUCT_REMOVE:
      // Remove selected product from list
      let items = state.items.filter((el) => el.id !== action.payload.id)
      return {
        ...state,
        items
      }

    default:
      return state
  }
}
