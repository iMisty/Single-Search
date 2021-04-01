/*
 * @Author: Miya
 * @Date: 2020-12-11 17:13:16
 * @LastEditTime: 2020-12-11 17:16:29
 * @LastEditors: Miya
 * @Description: User Router
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Single-Search-Backend\src\router\user.ts
 * @Version: 1.0
 */
import * as Router from 'koa-router';
const User = require('../controller/User');

const router = new Router();

router.prefix('/user');

router.get('/', User.getUserData);

router.post('/', User.addUserData);

export default router;
