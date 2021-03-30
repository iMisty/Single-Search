/*
* @Author: Miya
* @Date: 2020-09-01 11:04:13
* @LastEditTime: 2020-09-30 17:01:54
* @LastEditors: Miya
* @Description: 获取搜索引擎联想关键词
* @FilePath: \Single-Search-Front\src\utils\GetSearchExtra.ts
*/
import axios from 'axios';
import { SEARCH_EXTRA_DATA } from '@/config/api.config';

const SearchAPI = SEARCH_EXTRA_DATA;

export const getExtraData = async (
  eng: string,
  val: string,
  extra?: string
) => {
  let data: any = {};
  await axios({
    method: 'get',
    url: SearchAPI,
    params: {
      search: eng,
      keyword: val
    }
  }).then((res: object) => {
    data = res;
  });
  return data.data;
};
