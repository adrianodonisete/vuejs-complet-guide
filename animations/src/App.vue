<template>
	<div class="container">
		<div
			class="block"
			:class="{ animate: animatedBlock }"></div>
		<button @click="animateBlock">Animate</button>
	</div>

	<div class="container">
		<transition
			name="fade-button"
			mode="out-in">
			<button
				@click="showUsers"
				v-if="!usersAreVisible">
				Show Users
			</button>
			<button
				@click="hideUsers"
				v-else>
				Hide Users
			</button>
		</transition>
	</div>

	<div class="container">
		<transition
			name="para"
			@before-enter="myBeforeEnter"
			@enter="myEnter"
			@after-enter="myAfterEnter">
			<p v-if="paragIsVisible">This is only sometimes visible</p>
		</transition>
		<button @click="toggleParagraph">Toggle Paragraph</button>
	</div>

	<base-modal
		@close="hideDialog"
		:open="dialogIsVisible">
		<p>This is a test dialog!</p>
		<button @click="hideDialog">Close it!</button>
	</base-modal>

	<div class="container">
		<button @click="showDialog">Show Dialog</button>
	</div>

	<div class="container">
		<transition
			name="new-para"
			@before-enter="myBeforeEnter"
			@enter="myEnter"
			@after-enter="myAfterEnter">
			<p v-if="newParaIsVisible">This is the new paragraph</p>
		</transition>
		<button @click="toggleNewParagraph">New Paragraph</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			animatedBlock: false,
			dialogIsVisible: false,
			paragIsVisible: false,
			newParaIsVisible: false,
			usersAreVisible: false,
		};
	},
	methods: {
		myBeforeEnter(el) {
			console.log('myBeforeEnter');
			console.log(el);
		},
		myEnter(el) {
			console.log('myEnter');
			console.log(el);
		},
		myAfterEnter(el) {
			console.log('myAfterEnter');
			console.log(el);
		},
		showUsers() {
			this.usersAreVisible = true;
		},
		hideUsers() {
			this.usersAreVisible = false;
		},
		animateBlock() {
			this.animatedBlock = true;
		},
		toggleParagraph() {
			this.paragIsVisible = !this.paragIsVisible;
		},
		toggleNewParagraph() {
			this.newParaIsVisible = !this.newParaIsVisible;
		},
		showDialog() {
			this.dialogIsVisible = true;
		},
		hideDialog() {
			this.dialogIsVisible = false;
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
button {
	font: inherit;
	padding: 0.5rem 2rem;
	border: 1px solid #810032;
	border-radius: 30px;
	background-color: #810032;
	color: white;
	cursor: pointer;
}
button:hover,
button:active {
	background-color: #a80b48;
	border-color: #a80b48;
}
.block {
	width: 8rem;
	height: 8rem;
	background-color: #290033;
	margin-bottom: 2rem;
	/* transition: transform 0.5s ease-out; */
}
.container {
	max-width: 40rem;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	border: 2px solid #ccc;
	border-radius: 12px;
}

.animate {
	/* transform: translateX(-150px); */
	animation: slide-fade 0.3s ease-out forwards;
}

.v-enter-from {
	/* opacity: 0;
	transform: translateY(-30px); */
}

.v-enter-active {
	/* transition: all 0.3s ease-out; */
	animation: slide-scale 0.4s ease-out;
}

.v-enter-to {
	/* opacity: 1;
	transform: translateY(0); */
}

.v-leave-from {
	/* opacity: 1;
	transform: translateY(0); */
}

.v-leave-active {
	/* transition: all 0.3s ease-in; */
	animation: slide-scale 0.4s ease-in;
}

.v-leave-to {
	/* opacity: 0;
	transform: translateY(30px); */
}

.para-enter-from {
	/* opacity: 0;
	transform: translateY(-30px); */
}

.para-enter-active {
	/* transition: all 0.3s ease-out; */
	animation: slide-scale 0.4s ease-out;
}

.para-enter-to {
	/* opacity: 1;
	transform: translateY(0); */
}

.para-leave-from {
	/* opacity: 1;
	transform: translateY(0); */
}

.para-leave-active {
	/* transition: all 0.3s ease-in; */
	animation: slide-scale 0.4s ease-in;
}

.para-leave-to {
	/* opacity: 0;
	transform: translateY(30px); */
}

.fade-button-enter-from,
.fade-button-leave-from {
	opacity: 0;
}
.fade-button-enter-active {
	transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
	transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-to {
	opacity: 1;
}

.new-para-enter-from {
	/* opacity: 0;
	transform: translateY(-30px); */
}

.new-para-enter-active {
	/* transition: all 0.3s ease-out; */
	animation: slide-scale 0.4s ease-out;
}

.new-para-enter-to {
	/* opacity: 1;
	transform: translateY(0); */
}

.new-para-leave-from {
	/* opacity: 1;
	transform: translateY(0); */
}

.new-para-leave-active {
	/* transition: all 0.3s ease-in; */
	animation: slide-scale 0.4s ease-in;
}

.new-para-leave-to {
	/* opacity: 0;
	transform: translateY(30px); */
}

@keyframes slide-scale {
	0% {
		transform: translateX(0) scale(1);
	}

	70% {
		transform: translateX(-120px) scale(1.1);
	}

	100% {
		transform: translateX(-150px) scale(1);
	}
}

@keyframes slide-fade {
	0% {
		transform: translateX(0) scale(1);
	}

	70% {
		transform: translateX(-120px) scale(1.1);
	}

	100% {
		transform: translateX(-150px) scale(1);
	}
}
</style>
