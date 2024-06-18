import { FIREBASE_URL } from '../../../utils/constants';

export default {
	async registerCoach(context, formData) {
		const userId = context.rootGetters.userId;
		const coachData = {
			firstName: formData.first,
			lastName: formData.last,
			areas: formData.areas,
			description: formData.desc,
			hourlyRate: formData.rate,
		};

		const response = await fetch(`${FIREBASE_URL}coaches/${userId}.json`, {
			method: 'PUT',
			body: JSON.stringify(coachData),
		});

		if (!response.ok) {
			// error
			console.log(response.text());
		}

		context.commit('registerCoach', {
			...coachData,
			id: userId,
		});
	},

	async loadCoaches(context) {
		const response = await fetch(`${FIREBASE_URL}coaches.json`, {
			method: 'GET',
		});
		const data = await response.json();

		if (!response.ok) {
			// error
			console.log(response.text());
		}

		const coaches = [];

		for (const key in data) {
			const coach = {
				id: key,
				firstName: data[key].firstName,
				lastName: data[key].lastName,
				areas: data[key].areas,
				description: data[key].description,
				hourlyRate: data[key].hourlyRate,
			};

			coaches.push(coach);
		}

		context.commit('setCoaches', coaches);
	},
};
