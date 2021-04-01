/*
 * @Author: Miya
 * @Date: 2020-11-16 11:20:54
 * @LastEditTime: 2021-01-14 10:07:41
 * @LastEditors: Miya
 * @Description: 初始化
 * @FilePath: \Single-Search-API\controller\install.ts
 * @Version: 1.0
 */
const fs = require('fs');
const db = './src/db/db.ts';

class Install {
  public static validate() {
    const isExist = fs.existsSync(db, (exists: boolean) => {
      if (exists) {
        console.log(exists);
        return true;
      } else {
        console.log(exists);
        return false;
      }
    });
    return isExist;
  }

  public static install(ctx: any) {
    const isExist = Install.validate();
    if (!isExist) return;

    const { id, password, port } = ctx.query;
    if (!id || !password || !port) {
      ctx.body = {
        code: 401,
      };
      return false;
    }
    const data = `const db = 'mongodb://${id}:${password}@localhost:${port}/mdb_search';
    module.exports={ db };`;
    const a = fs.writeFile(db, data, (err: any) => {
      if (err) {
        console.log(err);
        return ctx.throw(400, { code: 400 });
      }
      return (ctx.body = {
        code: 1,
        msg: 'successed',
      });
    });
    return a;
  }
}

export { Install };
