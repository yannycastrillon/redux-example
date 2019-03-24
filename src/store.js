import { createStore } from 'redux';

const reducer = (state, action) => {
  if(action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: state.cart.concat(action.payload)
    }
  }

  if(action.type === 'REMOVE_TO_CART') {
    console.log("Remove to cart Action");
    console.log(state.cart, action.payload);
    return {
      ...state,
      cart: state.cart.filter(e => e != action.payload)
    }
  }
  return state;
}

export default createStore(reducer, { cart: [] });