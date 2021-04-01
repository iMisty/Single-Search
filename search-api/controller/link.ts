/*
 * @Author: Miya
 * @Date: 2020-11-17 11:28:09
 * @LastEditTime: 2020-11-18 11:42:27
 * @LastEditors: Miya
 * @Description: 链接控制
 * @FilePath: \Single-Search-API\controller\link.ts
 * @Version: 1.0
 */

const LinkModel = require('../model/LinkModel');

class Link {
  public static async infoLink(ctx: any) {
    const result = await LinkModel.find();
    try {
      return (ctx.body = {
        code: 200,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: result,
      });
    }
  }

  public static async addLink(ctx: any) {
    const value = new LinkModel({
      classify: ctx.request.body.classify,
      link: ctx.request.body.link,
    });
    try {
      const result = await value.save();
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

  public static async updateClassify(ctx: any) {
    const value = await LinkModel.updateOne(
      { _id: ctx.request.body.id },
      { $set: { classify: ctx.request.body.classify } }
    );
    try {
      return (ctx.body = {
        code: 200,
        msg: value,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  public static async updateLink(ctx: any) {
    const value = await LinkModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $set: {
          link: ctx.request.body.data,
        },
      }
    );
    try {
      return (ctx.body = {
        code: 200,
        msg: value,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  public static async deleteClassify(ctx: any) {
    const value = await LinkModel.deleteOne({
      _id: ctx.request.body.id,
    });

    try {
      // const space = await LinkModel.repairDatabase();
      return (ctx.body = {
        code: 200,
        msg: value,
        // space: space
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }
}

module.exports = Link;
