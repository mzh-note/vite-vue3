import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default ({ command, mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  console.log(command, env.VITE_NODE_ENV)
  return defineConfig({
    plugins: [
      vue(),
      qiankun('panorama-web', { useDevMode: true }), // name 与主应用注册的 name 一致
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 8989,
      cors: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: {
        '/api': {
          target: 'http://crmtest.gf.com.cn',
          changeOrigin: true,
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          format: 'umd', // 必须为 umd 格式
        },
      },
      sourcemap: false,
    },
  })
}
