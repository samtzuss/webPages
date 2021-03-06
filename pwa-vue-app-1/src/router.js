import Vue from 'vue'
import { createRouter, createWebHistory } from "vue-router"

// Page content
import Page1 from '@/components/Page1'
import Home from '@/components/Home'

// Fallback page
import PageNotFound from '@/components/PageNotFound'

// Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page-1',
    name: 'Page 1',
    component: Page1
  },
  {
    path: '**',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
