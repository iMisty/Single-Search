/*
 * @Author: Miya
 * @Date: 2020-12-11 11:39:00
 * @LastEditTime: 2020-12-11 14:48:04
 * @LastEditors: Miya
 * @Description: User Config
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Single-Search-Backend\src\controller\User.ts
 * @Version: 1.0
 */
import * as Mongoose from 'mongoose';

const UserSchema = require('../models/user');

class User {
  static async getUserData(ctx: any) {
    const result = await UserSchema.find();
    try {
      return (ctx.body = {
        code: 200,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }
  static async addUserData(ctx: any) {
    const result = new UserSchema({
      nickname: ctx.request.body.nickname,
      avatar: ctx.request.body.avatar,
      default_avatar: ctx.request.body.default_avatar,
      default_search: ctx.request.body.default_search,
      search_img: ctx.request.body.search_img,
      hitokoto: ctx.request.body.hitokoto,
    });
    try {
      await result.save();
      return (ctx.body = {
        code: 200,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }
}

module.exports = User;
