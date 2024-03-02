export default {
	addProductToCart(context, payload) {
		context.commit('addProdCart', payload);
	},
	removeProductToCart(context, payload) {
		context.commit('removeProdCart', { prodId: payload });
	},
};
