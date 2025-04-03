import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/views/UserList.vue'
import UserInfo from '@/views/UserInfo.vue'

const routes = [
  {
    path: '/',
    redirect : { name : 'userList'}
  },
  {
    path: '/userList',
    name: 'userList',
    component: UserList
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: UserInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
