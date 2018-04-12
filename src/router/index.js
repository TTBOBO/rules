import Vue from 'vue';
import Router from 'vue-router';

import ykp from '@/assets/js/ykp.js';

import hm from '@/assets/js/hm.js';


// import Home from '@/view/home';

import {routers,otherRouter } from './router';


Router.prototype.back = function () {
	this.go(-1);
};

Router.prototype.next = function (...arg) {
	this.push(...arg);
};

Router.prototype.goto = function (rt, isBack = false) {
	this.isBack = isBack;
	this.push(rt);
};


Vue.use(Router);


const defaultRouter = {
	routes: routers
};
export const router = new Router(defaultRouter);

router.beforeEach((to, from, next) => {
	hm.title(to.meta);
	var loginStatus = ykp.getSessionStorage('userInfo');
	if (!loginStatus && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
		next({
			path: '/login'
		});
	} else if (loginStatus && to.name === 'login') { // 判断是否已经登录且前往的是登录页
		next({
			path: '/info'
		});
	}else {
		const curRouter = hm.getRouter(routers,to.path);
		if(curRouter && curRouter.access !== undefined) {
			//有权限时跳转到对应的页面 反之 跳转到403页面
			if(ykp.getSessionStorage('role_id').split(',').indexOf(curRouter.access) != -1 || ykp.getSessionStorage('role_id') == "*") {
				hm.toDefaultPage([...routers],to.name,router,next);
			}else {  
				next({
					replace:true,
					path: '/403'
				});
			}
		}else {
			hm.toDefaultPage([...routers],to.name,router,next);
		}
	}
})


