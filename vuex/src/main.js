import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
	state() {
		return {
			counter: 0,
			isLoggedIn: false,
		};
	},
	mutations: {
		increment(state) {
			state.counter++;
		},
		increase(state, payload) {
			state.counter += payload.value;
		},
		setAuth(state, payload) {
			state.counter += payload.value;
		},
	},
	actions: {
		actionIncrement(context) {
			setTimeout(() => {
				context.commit('increment');
			}, 2000);
		},
		actionIncrease(context, payload) {
			setTimeout(() => {
				context.commit('increase', payload);
			}, 2000);
		},
	},
	getters: {
		finalCounter(state) {
			return state.counter * 15;
		},
		normalizedCounter(_, getters) {
			const final = getters.finalCounter;
			if (final < 0) {
				return 0;
			}
			if (final > 100) {
				return 100;
			}
			return final;
		},
	},
});

const app = createApp(App);

app.use(store);

app.mount('#app');
