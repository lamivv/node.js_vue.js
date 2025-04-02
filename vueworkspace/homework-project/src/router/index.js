import { createRouter, createWebHistory } from 'vue-router'
import EmployeeList from '@/views/EmployeeList.vue'
import EmployeeInfo from '@/views/EmployeeInfo.vue'
import EmployeeAdd from '@/views/EmployeeAdd.vue'
import EmployeeUpdate from '@/views/EmployeeUpdate.vue'

const routes = [
  {
    path: '/',
    redirect : {name : 'empList'}
  },
  {
    path: '/employeeList',
    name: 'empList',
    component: EmployeeList
  },
  {
    path: '/employeeInfo',
    name: 'empInfo',
    component: EmployeeInfo
  },
  {
    path: '/employeeAdd',
    name: 'empAdd',
    component: EmployeeAdd
  },
  {
    path: '/employeeUpdate/:id',
    name: 'empUpdate',
    component: EmployeeUpdate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
