export default {
	registerCoach(context, formData) {
		const coachData = {
			id: context.rootGetters.userId,
			firstName: formData.first,
			lastName: formData.last,
			areas: formData.areas,
			description: formData.desc,
			hourlyRate: formData.rate,
		};

		context.commit('registerCoach', coachData);
	},
};
