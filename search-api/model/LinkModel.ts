/*
 * @Author: Miya
 * @Date: 2020-11-17 11:12:40
 * @LastEditTime: 2020-11-17 11:27:56
 * @LastEditors: Miya
 * @Description: link模型
 * @FilePath: \Single-Search-API\src\model\LinkModel.ts
 * @Version: 1.0
 */

import * as Mongoose from 'mongoose';

const LinkModel = new Mongoose.Schema({
  classify: String,
  link: [
    {
      icon: String,
      text: String,
      link: String,
    },
  ],
});

module.exports = Mongoose.model('LinkModel', LinkModel);
