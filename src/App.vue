<!--
 * @Author: flyeageleyuan flyeageleyuan@163.com
 * @Date: 2024-07-05 00:26:42
 * @LastEditors: flyeageleyuan flyeageleyuan@163.com
 * @LastEditTime: 2024-07-06 17:26:21
 * @FilePath: \duolingo\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Home></Home>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from '@/views/home/index.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

</style>
