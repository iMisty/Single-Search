/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-19 04:13:49
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-19 16:28:21
 * @Description: 首次进入加载数据
 * @FilePath: /Single-Search/src/utils/install.ts
 */
import {
  ACCOUNT_DATA,
  LINK_DATA,
  SETTING_DATA,
  USER_DATA
} from '@/config/dataname.config';
import { navLink } from '@/config/link.config';
import { loginData } from '@/config/login.config';
import { setting } from '@/config/setting.config';
import { userInfo } from '@/config/user.config';

export const install = () => {
  const user = localStorage.getItem(USER_DATA);
  // 若 localStorage 中包含用户信息则判定为已开启过页面
  if (user !== null) {
    return false;
  }
  // 若 localStorage 中不包含用户信息,则判定为首次开启,加载默认数据
  // 用户信息
  const userData = JSON.stringify(userInfo);
  // 链接信息
  const linkData = JSON.stringify(navLink);
  // 登录信息
  const accountData = JSON.stringify(loginData);
  // 设置信息
  const settingData = JSON.stringify(setting);

  // 写入信息
  localStorage.setItem(USER_DATA, userData);
  localStorage.setItem(LINK_DATA, linkData);
  localStorage.setItem(ACCOUNT_DATA, accountData);
  localStorage.setItem(SETTING_DATA, settingData);

  return true;
};
