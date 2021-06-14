import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/welcome.vue';


Vue.use(Router);

const routes = [
{
	path: '/',
	name: 'welcome',
	component: Welcome
}
];

const router = new Router({
	routes: routes
});

export default router;