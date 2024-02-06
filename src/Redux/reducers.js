import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from './actions';
const initialState = {cartItems: []};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        return {...state, cartItems: [...state.cartItems, action.payload]};
    case REMOVE_FROM_CART:
        return {...state, cartItems: state.cartItems.filter(item => item.name !== action.payload)};
    case UPDATE_CART_ITEM_QUANTITY:
        return {...state, cartItems: state.cartItems.map(item =>
          item.price === action.payload.price ? { ...item, quantity: action.payload.price } : item)};
          default:
            return state;
}};

export default reducers;
