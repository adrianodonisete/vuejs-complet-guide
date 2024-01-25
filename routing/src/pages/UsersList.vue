<template>
	<button @click="confirmInput">Confirm</button>
	<button @click="saveChanges">Save Changes</button>

	<ul>
		<user-item
			v-for="user in users"
			:key="user.id"
			:name="user.fullName"
			:role="user.role"></user-item>
	</ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
	components: {
		UserItem,
	},
	inject: ['users'],
	data() {
		return {
			changesSaved: false,
		};
	},
	methods: {
		confirmInput() {
			this.$router.push({
				name: 'teams',
				query: { teste: 'valor 1' },
			});
		},
		saveChanges() {
			this.changesSaved = true;
		},
	},
	beforeRouteEnter(to, from, next) {
		console.log('UserList Cmp beforeRouteEnter');
		console.log(to, from);
		if (to.query.teste && to.query.teste === 'redir') {
			next({ name: 'users', query: { teste: 'redir-ok' } });
		}
		next();
	},
	beforeRouteLeave(to, from, next) {
		console.log('UserList Cmp beforeRouteLeave');
		console.log(to, from);
		if (this.changesSaved) {
			next();
		} else {
			const userWantsToLeave = confirm('You have unsaved changes! Do you really want to leave de page?');
			next(userWantsToLeave);
		}
	},
	unmounted() {
		console.log('unmounted');
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 2rem auto;
	max-width: 20rem;
	padding: 0;
}
</style>
