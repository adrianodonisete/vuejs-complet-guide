export default {
	testAuth(_, __, ___, rootGetters) {
		return rootGetters.userIsAuth;
	},
	finalCounter(state) {
		return state.counter * 3;
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
};
