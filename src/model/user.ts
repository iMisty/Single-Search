/*
 * @Author: Miya
 * @Date: 2020-08-07 18:46:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-08 16:55:25
 * @Description: 用户模型
 * @FilePath: \Single-Search\src\model\user.ts
 */
export default interface User {
  // 昵称
  name: string;
  // 性别 => 之后删除
  sex: string;
  // 头像
  avatar?: string;
  // 骚话
  introduce: string;
  // 适配颜色模式
  dark_style?: boolean;
  // 默认搜索引擎
  default_search?: string;
}
