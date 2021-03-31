/*
 * @Author: Miya
 * @Date: 2020-09-16 16:44:44
 * @LastEditTime: 2020-09-16 18:05:20
 * @LastEditors: Miya
 * @Description: 用户设置模型
 * @FilePath: \Single-Search\src\model\setting.ts
 * @Version: 1.0
 */
export default interface UserSetting {
  // 背景图片
  background: string;
  // 首页搜索栏图片
  search_logo: string | object;
  // 是否开启毛玻璃效果
  blur_style: boolean;
  // 是否开启一言
  hitokoto: boolean;
  // 版权信息
  copyright: {
    author: string;
    website: string;
  };
  // 网站开始日期
  start_date: string;
}
