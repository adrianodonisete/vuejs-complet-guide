<template>
	<transition-group
		tag="ul"
		name="user-list">
		<li
			v-for="user in users"
			:key="user"
			@click="removeUser(user)">
			{{ user }}
		</li>
	</transition-group>

	<div>
		<input
			type="text"
			ref="userNameInput" />
		<button @click="addUser">Add User</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: ['Max', 'Adriano', 'Cris'],
		};
	},
	methods: {
		addUser() {
			const newUser = this.$refs.userNameInput.value;
			this.users.unshift(newUser);
			this.$refs.userNameInput.value = '';
			this.$refs.userNameInput.focus();

			console.log(newUser);
		},
		removeUser(user) {
			console.log(user);
			this.users = this.users.filter(u => u !== user);
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 1rem 0;
	padding: 0;
}

li {
	border: 1px solid #ccc;
	padding: 1rem;
	text-align: center;
}

.user-list-enter-from {
	opacity: 0;
	transform: translateX(-30px);
}
.user-list-enter-active {
	transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
	opacity: 1;
	transform: translateX(0);
}
.user-list-leave-active {
	transition: all 1s ease-in;
	position: absolute;
}
.user-list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.user-list-move {
	transition: transform 0.8s ease;
}

@keyframes modal {
	0% {
		opacity: 0;
		transform: translateY(-50px) scale(0.9);
	}

	50% {
		opacity: 0.5;
	}

	100% {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
}
</style>
