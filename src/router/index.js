import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardLayout from '../layout/Dashboard.vue';
import AuthLayout from '../layout/Auth.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "demo" */ '../pages/home/index.vue')
      },
      {
        path: '/training',
        name: 'training',
        component: () => import(/* webpackChunkName: "demo" */ '../pages/Training.vue')
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import(/* webpackChunkName: "demo" */ '../pages/calendar/index.vue')
      },
      {
        path: '/workouts',
        name: 'workouts',
        component: () => import(/* webpackChunkName: "demo" */ '../pages/workout/index.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../pages/Profile.vue')
      },
      {
        path: '/create',
        name: 'create',
        component: () => import(/* webpackChunkName: "demo" */ '../pages/Create.vue')
      }
    ]
  },
  {
    path: '/login',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../pages/login/index.vue')
      },
      // {
      //   path: '/register',
      //   name: 'register',
      //   component: () => import(/* webpackChunkName: "demo" */ '../pages/Register.vue')
      // }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
