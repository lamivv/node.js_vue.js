const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : {
        target : serverOrigin, // 새로적용할 오리진
        changeOrigin : true, // 오리진 바꿀 것이다
        ws : false, // 웹소켓기능 사용하지 않아서 false => 알림이나 채팅을 만들 때 쓰는 기반,, 핫라인 => 사용하려면 서버에도 웹소켓관련 설치를 해야함
        pathRewrite : { '^/api' : '/' } // 경로 재작성 => 실제 통신에서는 /으로 접속해야하기때문에 적용
      }
    }
  }
})
