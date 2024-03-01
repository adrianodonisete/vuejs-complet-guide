export default {
	isEmptyCart(state) {
		console.log(state);
		return false;
		// return state.cart.items.lenght === 0;
	},
	getProds(state) {
		console.log(state);
		return state.products;
	},
};
