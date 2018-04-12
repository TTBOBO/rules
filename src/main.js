// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'

//引入iviw组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(router);
Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
	router,

	render: h => h(App),
	mounted(){
		// ykp.setSessionStorage('access','[1,2,3,4]')
	}
}).$mount('#app')

