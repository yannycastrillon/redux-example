import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const products = (state=[], action) => {
  if(action.type === 'REPLACE_PRODUCTS') {
    return action.payload
  }
  return state;
}

const cart = (state=[], action) => {
  if(action.type === 'ADD_TO_CART') {
    return state.concat(action.payload)
  } else if(action.type === 'REMOVE_TO_CART') {
    return state.filter(e => e !== action.payload)
  }
  return state;
}
 
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result;
}

export default createStore(
  combineReducers({ cart, products }),  // State reducers
  applyMiddleware(logger, thunk) // Middleware logger and thunk
);