/*
 * @Author: Miya
 * @Date: 2020-11-16 17:50:10
 * @LastEditTime: 2020-11-17 12:21:24
 * @LastEditors: Miya
 * @Description: Router index
 * @FilePath: \Single-Search-API\src\router\index.ts
 * @Version: 1.0
 */
import * as Router from 'koa-router';
import * as CombineRouters from 'koa-combine-routers';

import LinkRouter from './link';
import { SearchController } from '../controller/search';
import { Install } from '../controller/install';

const router = new Router();

const routers = CombineRouters(LinkRouter);

router.get('/', (ctx) => {
  ctx.body = 'Hello TypeScript';
});

router.get('/search', SearchController.getSearchData);
router.get('/t', Install.install);

export default routers;
