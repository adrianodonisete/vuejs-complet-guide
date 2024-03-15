export default {
	cartTotal(state) {
		return state.cart.total;
	},
	cartQuantity(state) {
		return state.cart.qty;
	},
	getCart(state) {
		return state.cart;
	},
};
