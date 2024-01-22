<template>
	<section>
		<base-card>
			<h2>Submitted Experiences</h2>

			<div>
				<base-button @click="loadExperiences"> Load Submitted Experiences </base-button>
			</div>

			<p v-if="isLoading">Loading...</p>
			<p v-else-if="!isLoading && error">{{ error }}</p>
			<p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found.</p>
			<ul v-else>
				<survey-result
					v-for="result in results"
					:key="result.id"
					:name="result.name"
					:rating="result.rating"></survey-result>
			</ul>
		</base-card>
	</section>
</template>

<script>
import { allSurveys } from './../../services/SurveyService';
import SurveyResult from './SurveyResult.vue';

export default {
	// props: ['results'],
	components: {
		SurveyResult,
	},
	data() {
		return {
			results: [],
			isLoading: false,
			error: null,
		};
	},
	mounted() {
		this.loadExperiences();
	},
	methods: {
		async loadExperiences() {
			this.isLoading = true;
			this.error = null;
			const results = [];

			try {
				const data = await allSurveys();
				for (const id in data) {
					results.push({
						id: id,
						name: data[id]['name'],
						rating: data[id]['rating'],
					});
				}
				console.log(data);
			} catch (error) {
				this.error = error;
				console.error(error);
			}

			this.results = results;
			this.isLoading = false;
		},
		async getSurveysAxios() {
			// how to use
			// https://axios-http.com/docs/api_intro e https://axios-http.com/docs/res_schema
			// TODO: criar service SurveyService
			//      -> https://jerickson.net/what-are-services-vue/
		},
		getSurveysFetch() {
			// fetch(`${FIREBASE_URL}/surveys.json`)
			// 	.then(res => {
			// 		if (res.ok) {
			// 			return res.json();
			// 		}
			// 	})
			// 	.then(data => {
			// 		console.log(data);
			// 		const results = [];
			// 		for (const id in data) {
			// 			results.push({
			// 				id: id,
			// 				name: data[id]['name'],
			// 				rating: data[id]['rating'],
			// 			});
			// 		}
			// 		this.results = results;
			// 	})
			// 	.catch(e => {
			// 		console.error(e);
			// 	});
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
