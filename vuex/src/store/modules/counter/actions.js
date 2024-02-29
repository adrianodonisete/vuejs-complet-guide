export default {
	actionIncrement(context) {
		setTimeout(() => {
			context.commit('increment');
		}, 2000);
	},
	actionIncrease(context, payload) {
		console.log(context);
		context.commit('increase', payload);
	},
};
