<template>
	<section>
		<base-card>
			<h2>How was you learning experience?</h2>

			<form @submit.prevent="submitSurvey">
				<div class="form-control">
					<label for="name">Your Name</label>
					<input
						type="text"
						id="name"
						name="name"
						v-model.trim="enteredName" />
				</div>

				<h3>My learning experience was ...</h3>

				<div class="form-control">
					<input
						type="radio"
						id="rating-poor"
						value="poor"
						name="rating"
						v-model="chosenRating" />
					<label for="rating-poor">Poor</label>
				</div>

				<div class="form-control">
					<input
						type="radio"
						id="rating-average"
						value="average"
						name="rating"
						v-model="chosenRating" />
					<label for="rating-average">Average</label>
				</div>

				<div class="form-control">
					<input
						type="radio"
						id="rating-great"
						value="great"
						name="rating"
						v-model="chosenRating" />
					<label for="rating-great">Great</label>
				</div>

				<p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
				<p v-if="error">
					{{ error }}
				</p>

				<div>
					<base-button>Submit</base-button>
				</div>
			</form>
		</base-card>
	</section>
</template>

<script>
import { addSurvey } from './../../services/SurveyService';

export default {
	data() {
		return {
			enteredName: '',
			chosenRating: null,
			invalidInput: false,
			error: null,
		};
	},
	// emits: ['survey-submit'],
	methods: {
		async submitSurvey() {
			if (this.enteredName === '' || !this.chosenRating) {
				this.invalidInput = true;
				return;
			}
			this.invalidInput = false;
			this.error = null;

			const survey = {
				name: this.enteredName,
				rating: this.chosenRating,
			};
			try {
				await addSurvey(survey);
			} catch (e) {
				this.error = e.message;
			}

			this.enteredName = '';
			this.chosenRating = null;
		},

		saveSurvey() {
			// axios
			// 	.post(`${FIREBASE_URL}/surveys.json`, theBody)
			// 	.then(response => {
			// 		console.log(response.statusText);
			// 		if (response.statusText != 'OK') {
			// 			console.log('error');
			// 			throw new Error('Could not save data! ' + response.statusText);
			// 		}
			// 	})
			// 	.catch(e => {
			// 		console.log(e);
			// 		this.error = e.message;
			// 	});
			// fetch(`${FIREBASE_URL}/surveys.json`, {
			//   method: 'POST',
			//   headers: {
			//     'Content-Type': 'application/json',
			//   },
			//   body: JSON.stringify({
			//     name: this.enteredName,
			//     rating: this.chosenRating,
			//   }),
			// });
		},
	},
};
</script>

<style scoped>
.form-control {
	margin: 0.5rem 0;
}

input[type='text'] {
	display: block;
	width: 20rem;
	margin-top: 0.5rem;
}
</style>
