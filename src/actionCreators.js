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

export { addToCart, removeFromCart }