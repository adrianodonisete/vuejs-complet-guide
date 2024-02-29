<template>
	<section>
		<h3>{{ finalCounter }}</h3>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		// counter() {
		// 	return this.$store.getters.finalCounter;
		// },
		...mapGetters('numbers', ['finalCounter']),
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
