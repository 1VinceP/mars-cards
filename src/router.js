import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/game',
      name: 'game',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "game" */ './views/Game.vue'),
    },
    {
      path: '/glossary/:item?',
      name: 'glossary',
      component: () => import(/* webpackChunkName: "glossary" */ './views/Glossary.vue'),
    },
    {
      path: '/options',
      name: 'options',
      component: () => import(/* webpackChunkName: "options" */ './views/Options.vue'),
    },
  ],
});
