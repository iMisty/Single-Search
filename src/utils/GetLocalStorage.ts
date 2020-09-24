/*
 * @Author: Miya
 * @Date: 2020-09-24 18:20:30
 * @LastEditTime: 2020-09-24 18:30:01
 * @LastEditors: Miya
 * @Description: 封装从LocalStorage获取数据方法
 * @FilePath: \Single-Search-Front\src\utils\GetLocalStorage.ts
 * @Version: 1.0
 */

/**
 * @description: 获取数据
 * @param {string} storageitem : LocalStorage item name
 * @return {string}
 */

export const getLocalStorage = (storageitem: string): string => {
  const data = localStorage.getItem(storageitem);
  if (data === null) {
    return '';
  }
  return JSON.parse(data);
};
