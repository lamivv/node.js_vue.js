import { createApp } from 'vue' // 페이지 전체를 다루는 최상위 객체(root)를 생성하는 createApp 
import App from './App.vue' // Root Vue 객체 정의파일 가져오기
// import App from './components/CommonComponent.vue';
import router from './router' // Vue Router 가져오기

createApp(App).use(router).mount('#app')
