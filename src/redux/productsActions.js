export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
export const PRODUCT_REMOVE = 'PRODUCT_REMOVE'

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
})

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
})

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: { error }
})

export const productRemove = id => ({
  type: PRODUCT_REMOVE,
  payload: { id }
})
