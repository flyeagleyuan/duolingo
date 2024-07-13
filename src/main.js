/*
 * @Author: flyeageleyuan flyeageleyuan@163.com
 * @Date: 2024-07-05 00:26:42
 * @LastEditors: flyeageleyuan flyeageleyuan@163.com
 * @LastEditTime: 2024-07-13 22:37:26
 * @FilePath: \duolingo\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { createApp } from 'vue'
import App from './App.vue'
import './css/reset.scss'
import 'vant/es/toast/style'
import 'vant/es/notify/style'


function setRem() {
  const rootValue = 16
  const rootWidth = 375
  const deviceWidth = document.documentElement.clientWidth
  document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'
console.log('main');
  
}

setRem()

window.onresize = function () {
  setRem()
}


createApp(App).mount('#app')
