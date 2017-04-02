import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Cart from './components/Cart.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{path:'/home',component:Home},
		{path: '/cart', component: Cart},
		{path: '*', redirect: '/home'}
	]
})


new Vue({
	router,
	el: '#app',
	components: {App}
})