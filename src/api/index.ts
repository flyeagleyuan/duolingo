/*
 * @Author: flyeageleyuan flyeageleyuan@163.com
 * @Date: 2024-07-10 00:08:27
 * @LastEditors: flyeageleyuan flyeageleyuan@163.com
 * @LastEditTime: 2024-08-08 22:47:52
 * @FilePath: \duolingo\src\api\index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import api from '../utils/request/index'
import qs from 'qs'

export const fetchVerify = (params) => {
  return api.post('/exchange/sign/add ', qs.stringify(params), { headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" } })
}