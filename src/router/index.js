import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import EventsView from '../views/Events.vue';
import ContactView from '../views/Contacts.vue';
import RulesView from '../views/Rules.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },

  {
    path: '/rules',
    name: 'rules',
    component: RulesView,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
