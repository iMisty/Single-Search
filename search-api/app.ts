/*
 * @Author: Miya
 * @Date: 2020-09-28 17:24:53
 * @LastEditTime: 2020-11-17 15:09:14
 * @LastEditors: Miya
 * @Description: Main
 * @FilePath: \Single-Search-API\src\app.ts
 * @Version: 1.0
 */
import * as Koa from 'koa';
import * as cors from 'koa2-cors';
import * as Mongoose from 'mongoose';
import bodyParser = require('koa-bodyparser');
import Router from './router/index';
const dbConfig = require('./config/db');

const app = new Koa();

app.use(
  cors({
    origin: '*', // 允许跨域的地址，我的理解类似白名单，*代表全部允许
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], // 暴露header列表
    allowMethods: ['GET','POST','PUT','DELETE'], // 请求方式
    allowHeaders: ['Accept', 'Origin', 'Content-type', 'Authorization'],
  })
);
app.use(bodyParser());
app.use(Router());

Mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(12451);

console.log('APP running');
