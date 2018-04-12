import axios from 'axios'
import env from '../../config/dev.env'

import Vue from 'vue';


axios.defaults.timeout = 5000;

axios.defaults.baseURL = env.NODE_ENV == "\"development\"" ? 'http://123.207.114.48:86/' : 'http://www.huimin.com/';//http://123.207.114.48:86

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
/**
 * 请求配置
 */
axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)
/**
 * 请求拦截
 */
axios.interceptors.response.use(
    response => {
        if(response.data.code == 400){
            // Vue.$Message.error('操作失败')
            return response.data;
        }  
        else 
            return response.data;
    },
    err => {
        return Promise.reject(err.response.data);
    }
)

/**
 * 
 * @param {*String} url api地址
 * @param {*Object} params   参数
 */
export function ajaxGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url,{
            params: params
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err);
        })
    })
}

/**
 * 
 * @param {*String} url api地址
 * @param {*Object} params   参数
 */
export function ajaxPost(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: params,
            transformRequest: [function (data) {
                let ret = '';
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }]
        }).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err);
        });
    })
}