import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		totalPrice: 0,
		price: '5288 - 6888',
		count: 0,
		goods:[],
		selectColor: '金色',
		selectModel: '',
		colors: [
			{ color: '银色', url: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png' },
			{ color: '深空灰色', url: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png'},
			{ color: '金色', url: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png'},
			{ color: '玫瑰金色', url: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'}
		],
		models: [
			{style: '16GB', price: 5288},
			{style: '64GB', price: 6088},
			{style: '128GB', price: 6888}
		]

		
	},
	mutations: {
		increment(state) {
			state.count++;
		}
	}
})