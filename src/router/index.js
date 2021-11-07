import { createRouter, createWebHistory } from 'vue-router';
// import RocketDetails from '@/views/RocketDetailsPage.vue'
import Home from '@/views/HomePage.vue'

// const Home = () => import('@/views/HomePage.vue')
const RocketDetails = () => import('@/views/RocketDetailsPage.vue')
const RocketsList = () => import('@/views/RocketsListPage.vue')

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rockets',
      name: 'rockets',
      component: RocketsList
    },
    {
      path: '/rockets/:id',
      name: 'rocket-details',
      component: RocketDetails
    }
  ]
})
