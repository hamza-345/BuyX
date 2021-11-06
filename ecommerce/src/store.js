import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {ListProducts, ProductsDetails} from "./reducers/productReducers"
import { addCartReducer } from "./reducers/cartReducers";

const reducers = combineReducers({
    productList: ListProducts,
    productDetails: ProductsDetails,
    cart: addCartReducer
})

const middleware = [thunk]

const cartItemsStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {cart : {cartItems: cartItemsStorage}}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;