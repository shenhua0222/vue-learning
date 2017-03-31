import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import ShopCar from './components/ShopCar.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{path:'/home',component:Home},
		{path: '/shopping', component: ShopCar},
		{path: '*', redirect: '/home'}
	]
})


// var ev = new Vue();
new Vue({
	router,
	el: '#app',
	components: {App}
})