/*
 * @Author: Miya
 * @Date: 2020-07-15 00:50:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-12-11 10:55:44
 * @Description: 导航链接路由
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Single-Search-Backend\src\router\link.ts
 */
import * as Router from 'koa-router';
const router = new Router();
const model = require('../models/link');
const Link = require('../controller/Link');

router.prefix('/link');

// 查询链接
router.get('/', Link.searchLink);
// 增加链接
router.post('/', Link.addNewLink);
// 修改链接
router.put('/', Link.changeLink);
// 删除分类
router.delete('/', Link.removeLink);
export default router;
