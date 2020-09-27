/*
 * @Author: Miya
 * @Date: 2020-06-12 18:02:06
 * @LastEditTime: 2020-09-27 11:53:31
 * @LastEditors: Miya
 * @Description: 根据获取的length值取得所选的搜索引擎
 * @FilePath: \Single-Search-Front\src\utils\getEngineValue.ts
 */
import { store } from '@/store';
const getEngineValue = (data: number) => {
  const temp = store.state.searchList;
  return temp[data].name;
};

export { getEngineValue };
