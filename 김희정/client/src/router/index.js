import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/views/MainComponent.vue'
import BoardList from '@/views/BoardList.vue'
import BoardInfo from '@/views/BoardInfo.vue'
import AddBoard from '@/views/AddBoard.vue'
import BoardUpdate from '@/views/BoardUpdate.vue'
import BoardLayout from '@/layouts/BoardLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainComponent
  },
  {
    path: '/boardList',
    name: 'boardList',
    component: BoardList
  },
  {
    path: '/boardInfo',
    name: 'boardInfo',
    component: BoardInfo
  },
  {
    path: '/addBoard',
    name: 'addBoard',
    component: AddBoard
  },
  {
    path: '/boardUpdate',
    name: 'boardUpdate',
    component: BoardUpdate
  },
  {
    path: '/boardLayout',
    name: 'boardLayout',
    component: BoardLayout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
