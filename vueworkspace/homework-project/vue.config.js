const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:5000';
module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : {
        target : serverOrigin,
        changeOrigin : true,
        ws : false,
        pathRewrite : { '^/api' : '/'}
      }
    } 
  }
})
