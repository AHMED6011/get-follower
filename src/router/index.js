import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Ahmed_A_A_A'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue'),
      meta: {
        title: 'Sign Up'
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue'),
      meta: {
        title: 'FAQ'
      }
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: 'Services'
      }
    },
    {
      path: '/howitworks',
      name: 'howitworks',
      component: () => import('../views/HowItWorks.vue'),
      meta: {
        title: 'How It Works'
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
      meta: {
        title: 'Terms'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogsView.vue'),
      meta: {
        title: 'Blogs'
      }
    },
    {
      path: '/blog/:id',
      name: 'blogdetails',
      component: () => import('../views/BlogDetails.vue'),
      meta: {
        title: 'Blogs Details'
      },
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
