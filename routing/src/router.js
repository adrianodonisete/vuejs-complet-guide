import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

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
			meta: { needsAuth: true },
			components: { default: TeamsList, footer: TeamsFooter },
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
			alias: '/list-users',
			components: { default: UsersList, footer: UsersFooter },
			beforeEnter(to, from, next) {
				console.log('User beforeEnter');
				console.log(to, from);
				if (to.query.teste && to.query.teste === 'block') {
					next({ name: 'users', query: { teste: 'unblock-ok' } });
				}
				next();
			},
		},
		{
			name: 'not-found',
			path: '/:notFound(.*)',
			component: NotFound,
		},
	],
	linkActiveClass: 'active',
	scrollBehavior(_, _2, savedPosition) {
		// console.log(to, from, savedPosition);
		return savedPosition || { left: 0, top: 0 };
	},
});

// navigation gard - for authentication
router.beforeEach((to, from, next) => {
	console.log('Global beforeEach');
	console.log(to, from);
	if (to.meta.needsAuth) {
		console.log(`The route ${to.name} needs Authentication`);
	}

	// if (to.name === 'users') {
	// 	next({ name: 'team-members', params: { teamId: 't1' } });
	// }
	next(true);
});

router.afterEach((to, from) => {
	console.log('Global afterEach');
	console.log(to, from);

	// usefull to sending analytics data to server, or log events
});

export default router;
