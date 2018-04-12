import Vue from 'vue';
import Router from 'vue-router';

import ykp from '@/assets/js/ykp.js';

import hm from '@/assets/js/hm.js';


import Home from '@/view/login/login';



Router.prototype.back = function () {
	this.go(-1);
};

Router.prototype.next = function (...arg) {
	this.push(...arg)
};

Router.prototype.goto = function (rt, isBack = false) {
	this.isBack = isBack
	this.push(rt)
};


// {
// 	path: '/*',redirect: '/Info'
// 	 },
Vue.use(Router);



export const otherRouter = {
	path: '/',
	component: Home,
	title: '首页',
	name:"otherRouter",
	children: [
	]
};

/** 路由懒加载*/
export const routes = [
	{
		path: '/goods',
		component: Home,
		title: '商品管理',
		icon:"star",
		name:"goods",
		access:"1",
	}
	
];

/**
 *登录
 */
export const loginRouter = {
    path: '/login',
    title: '登录',
    name:'login',
    component: resolve => { require(['@/view/login/login'], resolve) },
};

export const routers = [
    loginRouter,
    ...routes,
	otherRouter,
	
];


