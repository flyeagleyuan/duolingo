/*
 * @Author: flyeageleyuan flyeageleyuan@163.com
 * @Date: 2024-07-06 10:29:46
 * @LastEditors: flyeageleyuan flyeageleyuan@163.com
 * @LastEditTime: 2024-07-10 00:18:55
 * @FilePath: \duolingo\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import {VantResolver} from '@vant/auto-import-resolver'

export default defineConfig(()=>{
  // 配置选项
  return {
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers:[VantResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@types': path.resolve(__dirname, './src/types')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:"",
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8000,
      server: {
        proxy: 
        {
          '/account': {
            target: 'http://107.151.247.161:9000',
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/account/, '/account'),
            }
           

          }
        
      },
      open: true
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,//打包去掉console
          drop_debugger:true //打包去掉debugger
        }
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }

    },
     // 添加 Babel 配置
  babel: {
    presets: ['@babel/preset-env']
  }
  }
})