import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue')
    },
    {
      path: '/howitworks',
      name: 'howitworks',
      component: () => import('../views/HowItWorks.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogsView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blogdetails',
      component: () => import('../views/BlogDetails.vue'),
      props: true
    }
  ]
})

export default router
