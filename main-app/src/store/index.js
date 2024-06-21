import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import coachModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';

const store = createStore({
	modules: {
		coachMod: coachModule,
		requests: requestModule,
	},
	state() {
		return {
			userId: 'c1',
		};
	},
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters,
});

export default store;
