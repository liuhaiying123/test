import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3005,
    strictPort: false,
    proxy: {
      //代理以/hello开头的接口
        '/hello': {
          target: 'https://netease-cloud-music-api-alpha-fawn.vercel.app/',// 要跨域的域名
          changeOrigin: true, // 是否开启跨域
        }
      }
  }
})
