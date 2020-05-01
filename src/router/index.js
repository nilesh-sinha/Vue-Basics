import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueRouter from 'vue-router';
import Dashboard from '../views/dashboard.vue';
import AboutUs from '../views/about.vue';
import Contact from '../views/contact.vue';
import Courses from '../views/courses.vue';
import NotFound from '../views/not-found.vue';

Vue.use(Buefy);
Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: () => import(/* webpackChunkName: "upcoming" */ '../views/upcoming.vue')
  },
  {
    path: '/journey',
    name: 'Journey',
    component: () => import(/* webpackChunkName: "journey" */ '../views/journey.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/AboutUs.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
  }
});

export default router;
