<template>
	<section>
		<h2>{{ teamName }}</h2>
		<ul>
			<user-item
				v-for="member in members"
				:key="member.id"
				:name="member.fullName"
				:role="member.role"></user-item>
		</ul>

		<router-link to="/teams/t2">Go to Team 2</router-link>
	</section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
	inject: ['users', 'teams'],
	components: {
		UserItem,
	},
	data() {
		return {
			teamName: '',
			members: [],
		};
	},
	methods: {
		loadMembers(route) {
			const teamId = route.params.teamId;
			const selectedTeam = this.teams.find(team => team.id === teamId);
			const members = selectedTeam.members;
			const selectedMembers = [];
			for (const member of members) {
				const memberSel = this.users.find(user => user.id === member);
				if (memberSel) {
					selectedMembers.push(memberSel);
				}
			}
			this.members = selectedMembers;
			this.teamName = `(${teamId}) ${selectedTeam.name}`;
		},
	},
	created() {
		this.loadMembers(this.$route);

		console.log(this.$route.query);
	},
	beforeRouteUpdate(to, from, next) {
		console.log('TeamMembers Cmp beforeRouteUpdate');
		console.log(to, from);
		// this.loadMembers(to.params.teamId);
		next();
	},
	watch: {
		$route(newRoute) {
			this.loadMembers(newRoute);
		},
	},
};
</script>

<style scoped>
section {
	margin: 2rem auto;
	max-width: 40rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	border-radius: 12px;
}

h2 {
	margin: 0.5rem 0;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
