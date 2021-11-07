import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/HomePage.vue')

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home }
  ]
})
