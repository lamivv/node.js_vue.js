const { defineConfig } = require('@vue/cli-service')
const server = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port : 8099, // 뷰의 포트를 변경
    proxy : {
      '^/api' : {
        target : server,
        changeOrigin : true,
        pathRewrite : { '^/api' : '/' },
        ws : false
      }
    }
  }
})
