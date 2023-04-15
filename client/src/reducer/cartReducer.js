export const cartReducer = (state = { cartItems: [] }, action) => {      // cartItem will store items of cart
    switch (action.type) {
        case 'ADD_TO_CART':
            const alreadyExists = state.cartItems.find((item) => item._id === action.payload._id);
            if (alreadyExists)  // if item is already exists in cart  , map id of pizza
            {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
            }

        case 'DELETE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item._id !== action.payload._id),
            }

        default:
            return state;
    }
};