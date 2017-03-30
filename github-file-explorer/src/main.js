import Vue from "vue"
import VueResource from 'vue-resource'
import App from './app.vue'

Vue.use(VueResource);

new Vue({
	el: '#app',
	components: { App }
})


