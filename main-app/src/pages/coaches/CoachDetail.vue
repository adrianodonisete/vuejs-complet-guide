<template>
	<div>
		<section>
			<base-card>
				<h2>{{ fullName }}</h2>
				<h3>${{ rate }}/hour</h3>
			</base-card>
		</section>

		<section>
			<base-card>
				<header>
					<h2>Interested? Reach out now!</h2>
					<base-button
						isLink
						:to="contactLink">
						Contact
					</base-button>
				</header>

				<router-view></router-view>
			</base-card>
		</section>

		<section>
			<base-card>
				<base-badge
					v-for="area in areas"
					:key="area"
					:type="area"
					:title="area"></base-badge>
				<p>{{ description }}</p>
			</base-card>
		</section>
	</div>
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
			selectedCoach: [],
		};
	},
	computed: {
		fullName() {
			return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
		},
		areas() {
			return this.selectedCoach.areas;
		},
		rate() {
			return this.selectedCoach.hourlyRate;
		},
		description() {
			return this.selectedCoach.description;
		},
		contactLink() {
			return `${this.$route.path}/contact`;
		},
	},
	created() {
		this.selectedCoach = this.$store.getters['coachMod/coaches'].find(coach => coach.id == this.id);
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	max-width: 40rem;
}
</style>
