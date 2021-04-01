/*
 * @Author: Miya
 * @Date: 2020-09-27 12:34:33
 * @LastEditTime: 2020-09-27 14:44:55
 * @LastEditors: Miya
 * @Description: 删除所有数据
 * @FilePath: \Single-Search-Front\src\utils\uninstall.ts
 * @Version: 1.0
 */
import {
  ACCOUNT_DATA,
  LINK_DATA,
  SETTING_DATA,
  TOKEN_DATA,
  USER_DATA
} from '@/config/dataname.config';

export const uninstall = (status: boolean) => {
  if (status === false) {
    return false;
  }
  localStorage.removeItem(USER_DATA);
  localStorage.removeItem(SETTING_DATA);
  localStorage.removeItem(ACCOUNT_DATA);
  localStorage.removeItem(TOKEN_DATA);
  localStorage.removeItem(LINK_DATA);
  return true;
};
