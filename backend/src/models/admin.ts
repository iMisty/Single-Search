/*
 * @Author: Miya
 * @Date: 2020-07-26 03:05:45
 * @LastEditTime: 2020-07-26 04:40:26
 * @LastEditors: Please set LastEditors
 * @Description: 管理员模型
 * @FilePath: /Single-Search-Server/src/models/admin.ts
 */

import * as Mongoose from 'mongoose';

const adminSchema = new Mongoose.Schema({
  username: String,
  password: String,
});

module.exports = Mongoose.model('Admin', adminSchema);
