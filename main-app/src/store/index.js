import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import coachModule from './modules/coaches/index.js';
// import productModule from './modules/products.js';

const store = createStore({
	modules: {
		coachMod: coachModule,
	},
	state() {
		return {
			userId: 'c3',
		};
	},
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters,
});

export default store;
