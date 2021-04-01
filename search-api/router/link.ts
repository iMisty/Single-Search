/*
 * @Author: Miya
 * @Date: 2020-11-17 10:37:33
 * @LastEditTime: 2020-11-17 17:51:41
 * @LastEditors: Miya
 * @Description: link router
 * @FilePath: \Single-Search-API\src\router\link.ts
 * @Version: 1.0
 */
const router = require('koa-router')();

const Link = require('../controller/link');

router.prefix('/link');

router.get('/', Link.infoLink);

router.post('/', Link.addLink);

router.delete('/', Link.deleteClassify);

router.put('/link', Link.updateLink);

router.put('/classify', Link.updateClassify);

export default router;
