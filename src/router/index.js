import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Main from '../views/Main.vue';
import AddEvent from '../views/AddEvent.vue';
import Settings from '../views/Settings.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Sign in',
    component: Login,
  },
  {
    path: '/register',
    name: 'Sign up',
    component: Register,
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
  },
  {
    path: '/addEvent',
    name: 'Event',
    component: AddEvent,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
