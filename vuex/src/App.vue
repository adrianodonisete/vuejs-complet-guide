<template>
	<base-container title="Auth">
		<user-auth></user-auth>
	</base-container>

	<base-container
		title="Vuex"
		v-if="isAuth">
		<the-counter></the-counter>
		<favorite-value></favorite-value>

		<h3>{{ counter }}</h3>
		<button @click="addOne">Add 1</button>
		<button @click="addCounter">Add Counter</button>

		<change-counter></change-counter>
	</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		FavoriteValue,
		UserAuth,
	},
	computed: {
		counter() {
			return this.$store.state['numbers/counter'];
		},
		isAuth() {
			return this.$store.getters.userIsAuth;
		},
	},
	methods: {
		addOne() {
			this.$store.commit('numbers/increment');
		},
		addCounter() {
			this.$store.dispatch({
				type: 'numbers/actionIncrease',
				value: 10,
			});
		},
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
