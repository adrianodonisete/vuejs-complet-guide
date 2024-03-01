import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import cartModule from './modules/cart/index.js';

const store = createStore({
	modules: {
		cartMod: cartModule,
	},
	state() {
		return {
			isLoggedIn: false,
			allItens: [0, 1, 2, 32, 4, 5],
		};
	},
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters,
});

export default store;
