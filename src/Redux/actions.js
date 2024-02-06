
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';


export const addToCart = (item) => {
  return (dispatch, getState) => {
    dispatch({type: ADD_TO_CART, payload: item});
    const {cart} = getState();
    localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
  };
};
export const removeFromCart = (item) => {
  return (dispatch, getState) =>{
    dispatch({type: REMOVE_FROM_CART, payload: item});
    const {cart} = getState();
    localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
  };
};

export const updateCartItemQuantity = (item, price) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: {item, price}
});