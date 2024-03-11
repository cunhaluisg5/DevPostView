import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Dashboard from './pages/Dashboard';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/perfil/:userid',
      component: Perfil
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

export default router;