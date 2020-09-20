/*
 * @Author: Miya
 * @Date: 2020-09-01 18:18:12
 * @LastEditTime: 2020-09-02 15:59:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Single-Search\src\utils\submitSearch.ts
 */
import { store } from '@/store/index';
const submitSearch = (eng: string, val: string, extra?: string) => {
  // 获取当前的搜索引擎列表
  const searchlist = store.state.searchList;
  const temp = searchlist.map((item) => {
    return {
      name: item.name,
      link: item.header
    };
  });
  // 计算链接
  const a = temp.findIndex((item) => item.name === eng);
  const engine = temp[a].link;
  const value = `${engine}${val}`;
  return value;
};

export { submitSearch };
