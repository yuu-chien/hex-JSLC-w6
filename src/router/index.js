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
    path: '/Playa',
    name: 'Playa',
    component: () => import('../views/Frontend/Playa.vue'),
    children: [
      {
        path: 'index',
        name: 'Playa-index',
        component: () => import('../views/Frontend/Playa-index.vue'),
      },
      {
        path: 'about',
        name: 'Playa-about',
        component: () => import('../views/Frontend/Playa-about.vue'),
      },
      {
        path: 'products',
        name: 'Playa-products',
        component: () => import('../views/Frontend/Playa-products.vue'),
      },
      {
        path: 'cart',
        name: 'Playa-cart',
        component: () => import('../views/Frontend/Playa-cart.vue'),
      },
    ],
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
