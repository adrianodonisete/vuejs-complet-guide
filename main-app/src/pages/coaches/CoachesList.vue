<template>
	<section>
		<coach-filter @change-filter="setFilters"></coach-filter>
	</section>

	<section>
		<base-card>
			<div class="controls">
				<base-button
					mode="outline"
					@click="loadCoaches">
					Refresh
				</base-button>

				<base-button
					v-if="!isCoach"
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
import CoachFilter from './../../components/coaches/CoachFilter';

export default {
	components: {
		CoachItem,
		CoachFilter,
	},
	data() {
		return {
			activeFilters: {
				frontend: true,
				backend: true,
				career: true,
			},
		};
	},
	computed: {
		isCoach() {
			return this.$store.getters['coachMod/isCoach'];
		},
		filteredCoaches() {
			const coaches = this.$store.getters['coachMod/coaches'];
			return coaches.filter(coach => {
				return (
					(this.activeFilters.frontend && coach.areas.includes('frontend')) ||
					(this.activeFilters.backend && coach.areas.includes('backend')) ||
					(this.activeFilters.career && coach.areas.includes('career'))
				);
			});
		},
		hasCoaches() {
			return this.$store.getters['coachMod/hasCoaches'];
		},
	},
	created() {
		this.loadCoaches();
	},
	methods: {
		setFilters(updatedFilters) {
			this.activeFilters = updatedFilters;
		},
		checkAreas(areas) {
			return areas || [];
		},
		loadCoaches() {
			this.$store.dispatch('coachMod/loadCoaches');
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
