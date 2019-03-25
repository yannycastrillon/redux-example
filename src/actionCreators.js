import axios from 'axios';

const loadProducts = () => {
	return dispatch => {
		return axios.get('http://localhost:3001/products')
				 .then((response) => {
					 dispatch({
					  type: 'REPLACE_PRODUCTS',
						payload: response.data
					 })
				 })
	}
}

const addToCart = product => {
  return {
		type: 'ADD_TO_CART',
		payload: product
	}
}

const removeFromCart = product => {
	return {
		type: 'REMOVE_TO_CART',
		payload: product
	}
}

export { addToCart, removeFromCart, loadProducts }