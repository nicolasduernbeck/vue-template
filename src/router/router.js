import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage/HomePage.vue';
import ContactPage from '../pages/ContactPage/ContactPage.vue';
import HelpPage from '../pages/HelpPage/HelpPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage },
    { path: '/help', component: HelpPage },
  ],
});

export default router;
