import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '@/views/MainContent.vue';
import BookList from '../views/book/BookList.vue';
import BookInfo from '../views/book/BookInfo.vue';
import BookForm from '../views/book/BookForm.vue';

import LoginForm from '@/views/user/LoginForm.vue';
import MypageLayout from '@/layouts/user/MypageLayout.vue';
import MyReviewList from '@/views/user/MyReviewList.vue';
import UserUpdateForm from '@/views/user/UserUpdateForm.vue';

// Vue Router에 등록될 라우팅 정보들
// 기본적으로 path와 name, component를 한쌍으로 등록
// <router-link/> : Vue Router에 등록된 정보를 호출
// <router-view/> : 호출한 라우팅 정보에 따라 component를 출력할 위치 지정
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainContent
    
  },
  {
    path: '/list',
    name: 'bookList',
    component: BookList
  },
  {
     // path 속성에 등록된 경로 안에 :(콜론)으로 선언된 문자열은 
    // 해당 위치의 값을 가지는 변수를 의미하고
    // this.$route.params 속성에 등록됨

    // '/info/100' -> this.$route.params.bno의 값이 100
    path: '/info/:bno',
    name: 'bookInfo',
    component: BookInfo
  },
  {
    path: '/form',
    name: 'bookForm',
    component: BookForm
  },
  {
    path : '/loginForm',
    name : 'loginForm',
    component : LoginForm
  },
  {
    path : '/mypage',
    name : 'mypage',
    component : MypageLayout,
    // Nested Route 방식
    children : [
      {
        path : 'myReview', // /mypage/myReview
        name : 'myReview', 
        component : MyReviewList
      },
      {
        path : 'myInfo', // /mypage/myInfo
        name : 'myInfo',
        component : UserUpdateForm
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
