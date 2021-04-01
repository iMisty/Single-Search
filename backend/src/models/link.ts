/*
 * @Author: Miya
 * @Date: 2020-07-15 00:50:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-12-17 11:30:36
 * @Description: 链接API
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Single-Search-Backend\src\models\link.ts
 */
import * as Mongoose from 'mongoose';
const linkSchema = new Mongoose.Schema({
  series: String,
  link: [
    {
      id: Number,
      icon: String,
      href: String,
      name: String,
    },
  ],
  count: Number,
});

module.exports = Mongoose.model('Link', linkSchema);
