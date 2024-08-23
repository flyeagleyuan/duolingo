/*
 * @Author: flyeageleyuan flyeageleyuan@163.com
 * @Date: 2024-07-09 23:39:32
 * @LastEditors: 'yuanfeixiao' 'yuanfeixiao@ccsmec.com'
 * @LastEditTime: 2024-08-23 17:53:14
 * @FilePath: \duolingo\src\utils\request\index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://duolingosuper.cn/', // 设置基础 URL
  baseURL: 'https://admin.keepsense.chat/', // 设置基础 URL
  timeout: 10000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json' // 设置默认请求头
  }
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {

    // 在发送请求之前做些什么
    // 比如添加 token 等
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {

    // 对响应数据做点什么
    // 比如处理 code 码, 错误信息等
    return response.data
  },
  (error) => {

    // 对响应错误做点什么
    // 比如显示错误信息, 根据 status code 执行不同操作等
    return Promise.reject(error)
  }
)

// 封装 GET、POST、PUT、DELETE 请求方法
export default {
  get(url, params = {}) {
    return instance.get(url, { params })
  },
  post(url,params, data = {}) {
    return instance.post(url, params, data)
  },
  put(url, data = {}) {
    return instance.put(url, data)
  },
  delete(url, data = {}) {
    return instance.delete(url, { data })
  }
}

