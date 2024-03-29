const app = Vue.createApp({
	data() {
		return {
			enteredGoalValue: '',
			goals: [],
		};
	},
	methods: {
		hasGoals() {
			return this.goals.length > 0;
		},
		addGoal() {
			return this.goals.push(this.enteredGoalValue);
		},
		removeGoal(index) {
			this.goals.splice(index, 1);
		},
	},
});

app.mount('#user-goals');
