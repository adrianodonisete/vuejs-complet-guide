const app = Vue.createApp({
	data() {
		return {
			selectedBoxA: false,
			selectedBoxB: false,
			selectedBoxC: false,
		};
	},
	computed: {
		classBoxC() {
			return {
				active: this.selectedBoxC,
			};
		},
	},
	methods: {
		boxSelect(box) {
			if (box === 'A') {
				this.selectedBoxA = !this.selectedBoxA;
			} else if (box === 'B') {
				this.selectedBoxB = !this.selectedBoxB;
			} else if (box === 'C') {
				this.selectedBoxC = !this.selectedBoxC;
			}
		},
	},
});
app.mount('#styling');
