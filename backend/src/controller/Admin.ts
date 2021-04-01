/*
 * @Author: Miya
 * @Date: 2020-07-26 03:08:50
 * @LastEditTime: 2020-12-10 11:33:36
 * @LastEditors: Miya
 * @Description: 管理员用户操作
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Single-Search-Backend\src\controller\Admin.ts
 */

import * as Mongoose from 'mongoose';
import jsonwebtoken = require('jsonwebtoken');
import md5 = require('md5');
const adminSchema = require('../models/admin');
const AdminSchema = Mongoose.model('Admin', adminSchema.adminSchema);
// token
const SECRET = 'Kagura_Design';

class Admin {
  // 默认输出
  static async default(ctx: any) {
    ctx.body = `This is admin's page`;
  }
  // 添加管理员
  static async addAdmin(ctx: any) {
    const adminSchema = new AdminSchema({
      username: ctx.request.body.username,
      password: md5(ctx.request.body.password),
    });
    try {
      const result = await AdminSchema.find();
      console.log(result);
      if (result.length !== 0) {
      ctx.body = {
        code: 401,
        msg: '已有管理员配置',
      };
      return;
      }
      await adminSchema.save();
      ctx.body = {
        code: 200,
        msg: '添加管理员配置成功',
      };
    } catch (err) {
      ctx.body = {
        code: 400,
        msg: err,
      };
    }
  }
  // 查找管理员
  static async findAdmin(ctx: any) {
    const result = await AdminSchema.find();
    try {
      ctx.body = {
        code: 200,
        result,
      };
    } catch (err) {
      ctx.body = {
        code: 400,
        msg: err,
      };
    }
  }
  // 修改管理员信息
  static async updateAdmin(ctx: any) {
    //@ts-ignore
    const result = await AdminSchema.where({
      username: ctx.request.body.username,
      password: md5(ctx.request.body.password),
    }).update({
      username: ctx.request.body.username,
      password: md5(ctx.request.body.newpassword),
    });
    try {
      ctx.body = {
        code: 200,
        msg: '修改成功',
      };
    } catch (err) {
      ctx.body = {
        code: 400,
        msg: err,
      };
    }
  }
  // 卸载管理员
  static async removeAdmin(ctx: any) {
    // @ts-ignore
    const result = await AdminSchema.remove({
      username: ctx.request.body.name,
    });
    if (result.ok === 1) {
      return (ctx.body = {
        code: 200,
        msg: '删除成功',
      });
    }
    return (ctx.body = {
      code: 400,
      result,
    });
  }
  // 登录判断
  static async login(ctx: any) {
    const checkUser = {
      username: ctx.request.body.username,
      password: md5(ctx.request.body.password),
    };
    // @ts-ignore
    const admin = await AdminSchema.where({
      username: { $eq: checkUser.username },
      password: { $eq: checkUser.password },
    });
    if (admin.length === 0) {
      // 登录失败, 用户名密码不正确
      ctx.body = {
        code: 400,
        msg: 'username or password is uncurrent',
      };
      return;
    }
    ctx.body = {
      code: 200,
      msg: 'success',
      token: jsonwebtoken.sign(
        { name: checkUser.username, id: 12450 }, // 加密userToken
        SECRET,
        // token 有效期30天
        { expiresIn: '30days' }
      ),
    };
  }
}

module.exports = Admin;
