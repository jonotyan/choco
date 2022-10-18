import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../pages/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: () => import('../pages/RestaurantsPage.vue'),
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('../components/RestaurantComp.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../pages/UsersPage.vue'),
  },
  {
    path: '/edit-profile/:id',
    name: 'UserProfileEdit',
    component: () => import('../pages/UserProfileEditPage.vue'),
  },
  {
    path: '/add-profile/:id',
    name: 'UserAdding',
    component: () => import('../pages/UserAdding.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
