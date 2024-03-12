import { createRouter, createWebHistory } from 'vue-router';
import firebase from './services/firebaseConnection';

import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Dashboard from './pages/Dashboard';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta:{
        requiresAuth: false
      }
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta:{
        requiresAuth: false
      }
    },
    {
      path: '/perfil/:userid',
      component: Perfil,
      props: true,
      meta:{
        requiresAuth: false
      }
    },
    {
      path: '/login',
      component: Login
    },
    /*{
      path: '/:catchAll(.*)',
      component: Erro
    }*/
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if(requiresAuth && !firebase.auth().currentUser){
    next('/login');
  }else{
    next();
  }
});

export default router;