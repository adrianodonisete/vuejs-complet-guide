<template>
	<div>
		<form @submit.prevent="submitForm">
			<div class="form-control">
				<label for="email">Your Email</label>
				<input
					type="email"
					id="email"
					v-model.trim="email" />
			</div>

			<div class="form-control">
				<label for="email">Message</label>
				<textarea
					id="message"
					v-model.trim="message"
					rows="5"></textarea>
			</div>

			<p
				class="errors"
				v-if="!formIsValid">
				Error! Please enter a valid email and non-empty message.
			</p>

			<div class="actions">
				<base-button>Send Message</base-button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			message: '',
			formIsValid: true,
		};
	},
	methods: {
		submitForm() {
			this.formIsValid = true;
			if (!this.isValidEmail(this.email) || this.message === '') {
				this.formIsValid = false;
				return;
			}

			const contactCoach = {
				coachId: this.$route.params.id,
				email: this.email,
				message: this.message,
			};
			this.$store.dispatch('requests/contactCoach', contactCoach);

			this.$router.replace('/coaches');
		},
		isValidEmail(email) {
			return email.includes('@');
		},
	},
};
</script>

<style scoped>
form {
	margin: 1rem;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 1rem;
}

.form-control {
	margin: 0.5rem 0;
}

label {
	font-weight: bold;
	margin-bottom: 0.5rem;
	display: block;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	border: 1px solid #ccc;
	padding: 0.15rem;
}

input:focus,
textarea:focus {
	border-color: #3d008d;
	background-color: #faf6ff;
	outline: none;
}

.errors {
	font-weight: bold;
	color: red;
}

.actions {
	text-align: center;
}
</style>
