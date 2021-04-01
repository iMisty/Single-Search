/*
 * @Author: Miya
 * @Date: 2020-08-13 00:02:09
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 16:26:45
 * @Description: 导航栏链接模型
 * @FilePath: \Single-Search\src\model\links.ts
 */
export default interface Link {
  name: string;
  icon: string;
  items: [
    {
      icon: string;
      link: string;
      text: string;
    }
  ];
}
