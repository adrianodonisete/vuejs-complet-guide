<template>
	<form @submit.prevent="submitData">
		<div>
			<label>Name</label>
			<input
				type="text"
				v-model="enteredName" />
		</div>

		<div>
			<label>Phone</label>
			<input
				type="text"
				v-model="enteredPHone" />
		</div>

		<div>
			<label>E-Mail</label>
			<input
				type="email"
				v-model="enteredEmail" />
		</div>

		<div>
			<button>Add Contact</button>
		</div>
	</form>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
		},
		isFavorite: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ['add-contact'],
	data() {
		return {
			enteredName: '',
			enteredPhone: '',
			enteredEmail: '',
		};
	},
	methods: {
		submitData() {
			this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
		},
	},
};
</script>
