import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;	//true 才可修改Content-Type
//Vue.http.headers.common['X-CSRF-TOKEN'] = "YXBpOnBhc3N3b3Jk";//$('meta[name="csrf-token"]').attr('content');
Vue.http.headers.post['Content-Type'] = "application/x-www-form-urlencoded";
/**
 * 通过VueResource异步get数据
 * @param url           请求地址
 * @param params        请求参数
 * @param callback      回调函数
 * @returns void
 */
export function ajaxGet(url,params,callback){
	params = {params: params,timeout: 0};
	_ajaxApi('get',url,params,callback);
}
/**
 * 通过VueResource异步post数据
 * @param url           请求地址
 * @param params        请求参数
 * @param callback      回调函数
 * @returns void
 */
export function ajaxPost(url,params,callback){
	Vue.http.headers.post['Content-Type'] = "application/json; charset=utf-8";
	_ajaxApi('post',url,params,callback);
}
/**
 * 通过axios异步
 * @param method        请求类型: get、post
 * @param url           请求地址
 * @param params        请求参数
 * @param callback      回调函数
 * @returns void
 */

function _ajaxApi(method,url,params,callback){
	
	var options = {
		timeout:8000,
	};
	let baseUrl = 'http://www.huimin.com';
	Vue.http[method](baseUrl+url, params,options).then(function (response) {
		if(typeof callback == 'function'){
			callback(response);
		}
	}, function (response) {
		// handle error
		response.body = {
			retcode:-200,//状态-200表示查询超时或接口异常
			data:'',
			msg:'查询超时或接口异常'
		};
		if(typeof callback == 'function'){
			callback(response);
		}
		console.log("error: ",response);
	});
}













































// import Vue from 'vue'

// import axios from 'axios'

// axios.defaults.baseURL = 'http://www.huiming.com';   //默认base 域名地址

// axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";

// export function ajaxGet(url,params,callback) {
// 	doAjax('get',url,params,callback)
// }




// export function ajaxPost(url,params,callback) {
// 	doAjax('post',url,params,callback)
// }

// // function doAjax(method, url, params, callback) {
// // 	// axios.post(url,params).then( res => {
// // 	// 	if(typeof callback == 'function') {
// // 	// 		callback(res);
// // 	// 	}
		
// // 	// }).catch(err => {
// // 	// 	if(typeof callback == 'function') {
// // 	// 		callback(err);
// // 	// 	}
// // 	// })
// // 	var data = {
// // 		headers: {'Content-Type': 'application/json;charset=UTF-8'},
// // 		method:method,
// // 		url:url,
// // 	};
// // 	// if(method == 'get') {
// // 		params.params = params;
// // 	// }else {
// // 	// 	data.data = params;
// // 	// }
// // 	axios({
// // 		headers: {'Content-Type': 'application/json;charset=UTF-8'},
// // 		method:method,
// // 		url:url,
// // 		params : params
// // 	}).then( res => {
// // 		if(typeof callback == 'function') {
// // 			callback(res);
// // 		}
		
// // 	}).catch(err => {
// // 		if(typeof callback == 'function') {
// // 			callback(err);
// // 		}
// // 	})
// // }

// function doAjax(method, url, params, callback) {
// 	// axios.post(url,params).then( res => {
// 	// 	if(typeof callback == 'function') {
// 	// 		callback(res);
// 	// 	}
		
// 	// }).catch(err => {
// 	// 	if(typeof callback == 'function') {
// 	// 		callback(err);
// 	// 	}
// 	// })
// 	var data = {
// 		// headers: {'Content-Type': 'application/json;charset=UTF-8'},
// 		method:'post',
// 		url:url,
// 		data : params
// 	};
// 	// if(method == 'get') {
// 	// 	data.params = params;
// 	// }else {
// 	// 	data.data = params;
// 	// }
// 	axios(data).then( res => {
// 		if(typeof callback == 'function') {
// 			callback(res);
// 		}
		
// 	}).catch(err => {
// 		if(typeof callback == 'function') {
// 			callback(err);
// 		}
// 	})
// }


















