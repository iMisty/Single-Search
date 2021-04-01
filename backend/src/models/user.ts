/*
 * @Author: Miya
 * @Date: 2020-12-11 11:41:26
 * @LastEditTime: 2020-12-11 12:21:31
 * @LastEditors: Miya
 * @Description: user model
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Single-Search-Backend\src\models\user.ts
 * @Version: 1.0
 */

 import * as Mongoose from 'mongoose';

 const UserSchema = new Mongoose.Schema({
   nickname: String,
   avatar: String,
   default_avatar: Number,
   default_search: String,
   search_img: String,
   hitokoto: Boolean
 })

 module.exports = Mongoose.model('user',UserSchema);