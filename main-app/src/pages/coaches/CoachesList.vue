<template>
	<section>filter</section>

	<section>
		<base-card>
			<div class="controls">
				<base-button mode="outline">Refresh</base-button>
				<base-button
					isLink
					to="/register">
					Register as Coach
				</base-button>
			</div>

			<ul v-if="hasCoaches">
				<coach-item
					v-for="coach in filteredCoaches"
					:key="coach.id"
					:id="coach.id"
					:first-name="coach.firstName"
					:last-name="coach.lastName"
					:rate="coach.hourlyRate"
					:areas="checkAreas(coach.areas)"></coach-item>
			</ul>
			<h3 v-else>No coaches found</h3>
		</base-card>
	</section>
</template>

<script>
import CoachItem from './../../components/coaches/CoachItem';

export default {
	components: { CoachItem },
	computed: {
		filteredCoaches() {
			return this.$store.getters['coachMod/coaches'];
		},
		hasCoaches() {
			return this.$store.getters['coachMod/hasCoaches'];
		},
	},
	methods: {
		checkAreas(areas) {
			return areas || [];
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.controls {
	display: flex;
	justify-content: space-between;
}
</style>
