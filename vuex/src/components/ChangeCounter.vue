<template>
	<button @click="changeCounter">Add 2</button>
</template>

<script>
export default {
	methods: {
		changeCounter() {
			this.$store.commit('increase', { value: 2 });
		},
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
