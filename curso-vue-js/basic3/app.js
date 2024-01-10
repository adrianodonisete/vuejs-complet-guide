const app = Vue.createApp({
	data() {
		return {
			counter: 9,
			name: '',
			confirmedName: '',
			watchFullname: '',
			lastname: '',
		};
	},
	watch: {
		counter(value) {
			if (value >= 5) {
				this.counter = 0;
			}
		},
		name(value) {
			value = value.trim();
			this.watchFullname = value === '' ? '' : `${value} Machado`;
		},
	},
	computed: {
		fullname() {
			console.log(this.name);
			if (this.name.trim() === '') {
				return '';
			}
			return `${this.name} ${this.lastname}`;
		},
	},
	methods: {
		add(n) {
			this.counter += n;
		},
		reduce(n) {
			this.counter -= n;
		},
		// outputFullName() {
		// 	if (this.name.trim() === '') {
		// 		return '';
		// 	}
		// 	return `${this.name} Machado`;
		// },
		// setName(event) {
		// 	this.name = event.target.value;
		// },
		// confirmedInput() {
		// 	this.confirmedName = this.name;
		// },
		resetInput() {
			this.name = '';
		},
		submitForm() {
			alert('Submited!');
		},
	},
});

app.mount('#events');
