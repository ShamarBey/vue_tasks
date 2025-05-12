import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/task/:id', // `:id` — это параметр, который будет меняться
    name: 'TaskPage',
    component: () => import('../components/Task.vue'), // Один общий компонент
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
