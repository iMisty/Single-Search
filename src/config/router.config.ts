/*
 * @Author: Miya
 * @Date: 2020-09-18 17:04:29
 * @LastEditTime: 2020-09-24 16:20:26
 * @LastEditors: Miya
 * @Description: 后台管理页面路由
 * @FilePath: \Single-Search-Front\src\config\router.config.ts
 * @Version: 1.0
 */
import Routes from '@/model/routes';
export const router: Routes[] = [
  { path: '/admin', title: 'home', name: '首页' },
  { path: '/admin/link', title: 'edit', name: '导航' },
  { path: '/admin/setting', title: 'setting', name: '设置' }
];
