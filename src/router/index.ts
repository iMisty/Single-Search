/*
 * @Author: Miya
 * @Date: 2020-05-27 14:28:24
 * @LastEditTime: 2020-09-20 01:38:04
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/router/index.ts
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Admin from '@/views/Admin.tsx';
// import Login from '@/views/Login.tsx';

import AdminIndex from '@/layout/admin';
import AdminLink from '@/layout/admin/link';
import AdminSetting from '@/layout/admin/setting';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect: '/',
    children: [
      {
        path: '/',
        component: AdminIndex
      },
      {
        path: 'link',
        component: AdminLink
      },
      {
        path: 'setting',
        component: AdminSetting,
        redirect: 'setting/user',
        children: [
          {
            path: 'user',
            component: () => import('@/layout/admin/setting-user')
          },
          {
            path: 'system',
            component: () => import('@/layout/admin/setting-system')
          },
          {
            path: 'account',
            component: () => import('@/layout/admin/setting-account')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test')
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/admin') {
    next();
  } else {
    const token = localStorage.getItem('s_token');
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLC.caAFsUUgzA0bPJtKfkH-4Hk';
    if (token) {
      next();
    } else {
      router.push({
        path: 'login'
      });
    }
  }
});

export default router;
