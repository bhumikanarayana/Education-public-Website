import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'Aboutus',
    component: () => import('@/pages/Aboutus.vue'),
  },
  {
    path: '/AcademicsCourses',
    name: 'AcademicsCourses',
    component: () => import('@/pages/AcademicsCourses.vue'),
  },
  {
    path: '/Announcements',
    name: 'Announcements',
    component: () => import('@/pages/Announcements.vue'),
  },
  {
    path: '/contact',
    name: 'Contactus',
    component: () => import('@/pages/Contactus.vue'),
  },
  {
    path: '/admission',
    name: 'Admission',
    component: () => import('@/pages/Admission.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

export default router
