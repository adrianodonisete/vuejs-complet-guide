<template>
	<section>
		<h3>{{ counter }}</h3>

		<p>We do more here...</p>
	</section>
</template>

<script>
export default {
	computed: {
		counter() {
			return this.$store.getters['numbers/normalizedCounter'];
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
