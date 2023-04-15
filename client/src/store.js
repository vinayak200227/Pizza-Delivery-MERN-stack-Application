import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getAllPizzaReducer, addPizzaReducer, getPizzaByIdReducer, updatePizzaByIdReducer } from './reducer/pizzaReducer'

import { cartReducer } from './reducer/cartReducer'

import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './reducer/userReducer'

import { placeOrderReducer } from './reducer/orderReducer';

import { getUserOrdersReducer, allUserOrdersReducer } from './reducer/orderReducer'

const cartItems = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    updatePizzaByIdReducer: updatePizzaByIdReducer,
    allUserOrdersReducer: allUserOrdersReducer,
    getAllUsersReducer: getAllUsersReducer
});


const initialState = {
    cartReducer: {
        cartItems: cartItems,

    },
    loginUserReducer: {
        currentUser: currentUser,
    }
}
const middleware = [thunk]
// store object
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store