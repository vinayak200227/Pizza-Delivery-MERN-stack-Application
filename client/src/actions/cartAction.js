export const addToCart = (pizza, quantity, varient, sauce, cheese) => (dispatch, getState) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        sauce: sauce,
        cheese: cheese,
        prices: pizza.prices,
        sauces_prices: pizza.sauces_prices,
        chees_prices: pizza.chees_prices,
        price: (pizza.prices[0][varient] + pizza.sauces_prices[0][sauce] + pizza.chees_prices[0][cheese]) * quantity,

    };
    if (cartItem.quantity > 10) {   // if quantity > 10
        alert("You can only add 10 pizzas");
    }
    else {
        if (cartItem.quantity < 1) {   // if quantity < 1 -> delete items
            dispatch({ type: 'DELETE_FROM_CART', payload: pizza })
        }
        else {
            dispatch({ type: "ADD_TO_CART", payload: cartItem });
            localStorage.setItem(
                'cartItems',
                JSON.stringify(getState().cartReducer.cartItems)
            );
        }

    }

};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: pizza })
    const cartItems = getState().cartReducer.cartitems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))  // remove item from local storage also
};