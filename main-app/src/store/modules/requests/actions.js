import { FIREBASE_URL } from '../../../utils/constants';

export default {
	async contactCoach(context, payload) {
		const newReq = {
			userEmail: payload.email,
			message: payload.message,
		};

		const response = await fetch(`${FIREBASE_URL}requests/${payload.coachId}.json`, {
			method: 'POST',
			body: JSON.stringify(newReq),
		});

		const data = await response.json();

		if (!response.ok) {
			const error = new Error(data.message || 'Failed to send request!');
			throw error;
		}

		newReq.id = data.name;
		newReq.coachId = payload.coachId;

		context.commit('addRequest', newReq);
	},
	async fetchRequests(context) {
		const coachId = context.rootGetters.userId;

		const response = await fetch(`${FIREBASE_URL}requests/${coachId}.json`, {
			method: 'GET',
		});

		const data = await response.json();

		if (!response.ok) {
			const error = new Error(data.message || 'Failed to fetch requests!');
			throw error;
		}

		const requests = [];

		for (const key in data) {
			const req = {
				id: key,
				coachId: coachId,
				userEmail: data[key].userEmail,
				message: data[key].message,
			};

			requests.push(req);

			context.commit('setRequests', requests);
		}
	},
};
