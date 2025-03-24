import { createRouter, createWebHistory } from 'vue-router';
import WeatherIndex from './Pages/Dashboard/Weather/Index.vue';

const routes = [
  {
    path: '/weather',
    name: 'weather',
    component: WeatherIndex,
    props: route => ({ city: route.query.city }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
