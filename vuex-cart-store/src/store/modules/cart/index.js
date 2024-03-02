import allProducts from './../../content/products.js';

import cartMutations from './mutations.js';
import cartActions from './actions.js';
import cartGetters from './getters.js';

const cartModule = {
	namespaced: true,
	state() {
		return {
			products: allProducts,
			cart: { items: [], total: 0, qty: 0 },
		};
	},
	mutations: cartMutations,
	actions: cartActions,
	getters: cartGetters,
};

export default cartModule;
