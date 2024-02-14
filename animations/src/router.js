import { createRouter, createWebHistory } from 'vue-router';

import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'root',
			path: '/',
			redirect: '/all-users?from=root',
		},
		{
			name: 'all-users',
			path: '/all-users',
			component: AllUsers,
		},
		{
			name: 'goals',
			path: '/goals',
			alias: '/course-goals',
			component: CourseGoals,
		},
		{
			name: 'not-found',
			path: '/:notFound(.*)',
			redirect: '/all-users?from=not-found',
		},
	],
	linkActiveClass: 'active',
	scrollBehavior(_, _2, savedPosition) {
		return savedPosition || { left: 0, top: 0 };
	},
});

export default router;
