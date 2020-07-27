import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Backend/Admin.vue'),
    children: [
      {
        path: 'products',
        name: 'Admin-products',
        component: () => import('../views/Backend/Admin-products'),
      },
      {
        path: 'coupons',
        name: 'Admin-coupons',
        component: () => import('../views/Backend/Admin-coupons'),
      },
      {
        path: 'images',
        name: 'Admin-images',
        component: () => import('../views/Backend/Admin-images'),
      },
      {
        path: 'orders',
        name: 'Admin-orders',
        component: () => import('../views/Backend/Admin-orders'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
