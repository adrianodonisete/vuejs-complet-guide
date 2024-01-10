const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn VueJs!',
            courseGoalB: 'Start the course and learn VueJs!',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal() {
            const rdNum = Math.random();
            return rdNum < 0.5 ? this.courseGoalA : this.courseGoalB;
        },
    },
});

app.mount('#user-goal');
