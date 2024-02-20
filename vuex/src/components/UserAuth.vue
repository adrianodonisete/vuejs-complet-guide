<template>
	<button @click="login">Login</button>
	<button @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		// changeCounter() {
		// 	this.$store.commit('increase', { value: 2 });
		// },
		// ...mapActions(['actionIncrement', 'actionIncrease']),
		...mapActions({
			increment: 'actionIncrement',
			increase: 'actionIncrease',
		}),
	},
};
</script>
