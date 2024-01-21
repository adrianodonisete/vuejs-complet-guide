import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'root',
			path: '/',
			redirect: '/teams',
		},
		{
			name: 'teams',
			path: '/teams',
			component: TeamsList,
			children: [
				{
					name: 'team-members',
					path: ':teamId',
					component: TeamMembers,
				},
			],
		},
		{
			name: 'users',
			path: '/users',
			component: UsersList,
			alias: '/list-users',
		},
		{
			name: 'not-found',
			path: '/:notFound(.*)',
			component: NotFound,
		},
	],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
