/*
 * @Author: your name
 * @Date: 2020-07-26 03:37:36
 * @LastEditTime: 2020-12-10 10:53:21
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Single-Search-Backend\src\router\admin.ts
 */
import * as Router from 'koa-router';
const router = new Router();
const Admin = require('../controller/Admin');
const model = require('../models/admin');

router.prefix('/admin');

router.get('/', Admin.default);
// 增加管理员
router.post('/', Admin.addAdmin);
// 查找管理员
router.post('/search', Admin.findAdmin);
// 修改管理员
router.put('/', Admin.updateAdmin);
// 卸载
router.del('/', Admin.removeAdmin);


export default router;
