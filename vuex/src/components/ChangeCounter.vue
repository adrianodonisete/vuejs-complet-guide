<template>
	<br />
	<button @click="increment">Add 1</button>
	<button @click="increase({ value: 12 })">Add 12</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		// changeCounter() {
		// 	this.$store.commit('increase', { value: 2 });
		// },
		// ...mapActions(['actionIncrement', 'actionIncrease']),
		...mapActions('numbers', {
			increment: 'actionIncrement',
			increase: 'actionIncrease',
		}),
	},
};
</script>

<style scoped>
section {
	max-width: 30rem;
	margin: 2rem auto;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}

h3 {
	text-align: center;
}
</style>
