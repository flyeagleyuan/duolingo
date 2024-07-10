/*
 * @Author: flyeageleyuan flyeageleyuan@163.com
 * @Date: 2024-07-10 00:08:27
 * @LastEditors: flyeageleyuan flyeageleyuan@163.com
 * @LastEditTime: 2024-07-10 00:10:53
 * @FilePath: \duolingo\src\api\index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import api from '../utils/request/index'

export const fetchVerify = (params) => {
  return api.post('', params)
}