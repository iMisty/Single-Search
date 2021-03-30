/*
 * @Author: Miya
 * @Date: 2021-03-29 10:59:37
 * @LastEditTime: 2021-03-29 11:10:55
 * @LastEditors: Miya
 * @Description: Vue-Router
 * @FilePath: \Single-Search-Front\src\router\router.ts
 * @Version: 2.0
 */

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home';

const routes = [
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;