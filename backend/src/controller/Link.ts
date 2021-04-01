/*
 * @Author: Miya
 * @Date: 2020-07-15 12:06:23
 * @LastEditors: Miya
 * @LastEditTime: 2020-12-17 17:11:57
 * @Description: 导航链接操作方法
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Single-Search-Backend\src\controller\Link.ts
 */
import * as mongoose from 'mongoose';
const ObjectID = require('mongodb').ObjectId;
const LinkSchema = mongoose.model('Link');

class Link {
  // 增加链接
  static async addNewLink(ctx: {
    request: { body: { series: string; link: string } };
    body: { code: number; msg: any; data?: number | mongoose.Document };
  }) {
    // 基础数据
    const series = ctx.request.body.series;
    const link = ctx.request.body.link;
    // @ts-ignore
    const temp = await LinkSchema.where({
      series,
    });
    console.log(`temp: ${temp}`);
    if (!series && !link) {
      ctx.body = {
        code: 402,
        msg: 'param error',
      };
      return;
    }
    // 若类目为空则新建类目
    if (temp.length === 0) {
      const result = new LinkSchema({
        series,
        count: 0,
        link,
      });
      console.log(`Data-Non:${result}`);
      try {
        await result.save();
        ctx.body = {
          code: 200,
          msg: 'ok',
          data: result,
        };
      } catch (err) {
        ctx.body = {
          code: 400,
          msg: err,
        };
      }
      return;
    }
    // 若类目不为空则插入数据
    // @ts-ignore
    const result = await LinkSchema.where({ series }).update({
      link,
    });
    console.log(`Data-Had:${result}`);
    try {
      ctx.body = {
        code: 200,
        msg: 'ok',
        data: result,
      };
    } catch (err) {
      ctx.body = {
        code: 400,
        msg: err,
      };
    }
  }
  // 查询链接
  static async searchLink(ctx: {
    query: { series: string; link: string; id: string };
    body: { code: number; data?: mongoose.Document[]; msg: any };
  }) {
    const { series, id, link } = ctx.query;
    if (series === undefined) {
      console.log('no param');
      const result = await LinkSchema.find({ _id: new ObjectID(id) });
      try {
        ctx.body = {
          code: 200,
          data: result,
          msg: 'ok',
        };
      } catch (err) {
        ctx.body = {
          code: 400,
          msg: err,
        };
      }
      return true;
    } else {
      console.log('had Param');
      const result = await LinkSchema.find({ series });
      try {
        ctx.body = {
          code: 200,
          data: result,
          msg: 'ok',
        };
      } catch (err) {
        ctx.body = {
          code: 400,
          msg: err,
        };
      }
      return true;
    }
  }
  // 修改链接
  static async changeLink(ctx: {
    request: { body: { id: string; series: string; link: any } };
    body: { code: number; msg: any };
  }) {
    const id = ctx.request.body.id;
    const result = await LinkSchema.update(
      {
        _id: id,
      },
      {
        $set: {
          series: ctx.request.body.series,
          link: ctx.request.body.link,
        },
      }
    );
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
  // 删除分类
  static async removeLink(ctx: any) {
    const id = ctx.request.body.id;
    const result = await LinkSchema.deleteOne({ _id: id });
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
  // 增加点击数
  static async addCount(ctx: any) {}
}

module.exports = Link;
