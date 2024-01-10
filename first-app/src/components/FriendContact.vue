<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
		<button @click="$emit('delete', id)">Delete</button>

		<ul v-if="detailsVisible">
			<li><strong>Phone:</strong> {{ phoneNumber }}</li>
			<li><strong>Email:</strong> {{ emailAddress }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	// props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
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
			// validator: value => {
			// 	return value === '1' || value === '0';
			// },
		},
	},
	emits: ['toggle-favorite', 'delete'],
	// emits: {
	// 	'toggle-favorite': id => {
	// 		if (id) {
	// 			return true;
	// 		} else {
	// 			console.warn('Id is missing!');
	// 			return false;
	// 		}
	// 	},
	// },
	data() {
		return {
			detailsVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsVisible = !this.detailsVisible;
		},
		toggleFavorite() {
			this.$emit('toggle-favorite', this.id);
		},
	},
};
</script>
