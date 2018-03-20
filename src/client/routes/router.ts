// 

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/client/routes/home/home'



export const routes = [

	{
		name: 'home', path: '/',
		component: Home,
		// component: import('@/client/routes/home/home')
		// component: () => import('@/client/routes/home/home'),
	},

	{ path: '*', redirect: { name: 'home' } },

] as Array<RouteConfig>



const router = new VueRouter({
	routes, mode: 'history',
	// linkActiveClass: 'is-active',
	linkExactActiveClass: 'is-active',
})

router.afterEach(function(to, from) {
	console.warn('router.afterEach')
	console.log('to ->', to)
	console.log('from ->', from)
	window.scrollTo({ top: 0, behavior: 'instant' })
})

export default router





declare module 'vue-router/types/router' {
	export interface RouteConfig {
		dname?: string
		icon?: string
		bold?: boolean
	}
}


