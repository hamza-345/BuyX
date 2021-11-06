import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";
import exportedObj from "../serverData";


export const addToCartAction = (id, qty) => async (dispatch, getState) => {
    exportedObj
      .getProduct(id)
      .then((data) => {
        dispatch({ type: ADD_TO_CART, payload: {
            product: data.id,
            name: data.name,
            price: data.price,
            image: data.productImages[0],
            stock: data.stock,
            qty
        } });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
      })
}

export const removeFromCartAction = (id) => async (dispatch, getState) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id})
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }