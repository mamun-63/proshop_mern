import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

// here is using thunk, function inside function to make async request
// getState is for getting all the piece of state of reducers in store.js
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
