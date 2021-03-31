/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-04 01:35:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-04 01:37:35
 * @Description: 后台管理页面 => 用户选择菜单模型
 * @FilePath: /Single-Search/src/model/admin-user.ts
 */
export default interface SettingMenu {
  // 提示文字
  title: string;
  // 跳转路径
  path: string;
  // 事件参数
  event?: string;
}
