/*
 * @Author: Miya
 * @Date: 2020-09-18 17:04:29
 * @LastEditTime: 2020-09-18 17:22:13
 * @LastEditors: Miya
 * @Description: 后台管理页面路由
 * @FilePath: \Single-Search\src\config\router.config.ts
 * @Version: 1.0
 */
import Routes from '@/model/routes';
export const router: Routes[] = [
  { path: '/admin', title: 'home', name: 'HOME' },
  // { path: '/admin/user', title: 'gaojiban', name: 'USER' },
  { path: '/admin/link', title: 'edit', name: 'LINK' },
  { path: '/admin/setting', title: 'setting', name: 'SETTING' }
];
