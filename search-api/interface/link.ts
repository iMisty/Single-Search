/*
 * @Author: Miya
 * @Date: 2020-11-17 11:40:45
 * @LastEditTime: 2020-11-17 11:56:12
 * @LastEditors: Miya
 * @Description: link interface
 * @FilePath: \Single-Search-API\src\interface\link.ts
 * @Version: 1.0
 */
export interface link {
  classify: string;
  link: [{icon: string, text: string, link: string}];
}
