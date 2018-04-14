import Vue from 'vue'
import App from './app'
import router from './router'
import VueResource from 'vue-resource'
import './common/base'

Vue.use(VueResource)

new Vue({
	el:'#app',
	router,
	render:h=>h(App)
})

