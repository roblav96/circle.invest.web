// 

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'



export const routes = [

	{
		name: 'home', path: '/',
		component: import('@/client/routes/home/home')
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


