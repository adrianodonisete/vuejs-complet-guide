import axios from 'axios';
import { FIREBASE_URL } from '../utils/constants.js';

export async function allSurveys() {
	const response = await axios.get(`${FIREBASE_URL}/surveys.json`);
	return await response.data;
}

export async function addSurvey(survey) {
	const response = await axios.post(`${FIREBASE_URL}/surveys.json`, survey);
	if (response.statusText != 'OK') {
		throw new Error('Could not save data! ' + response.statusText);
	}
	return response;
}
