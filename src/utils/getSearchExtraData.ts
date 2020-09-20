/*
 * @Author: Miya
 * @Date: 2020-09-01 11:04:13
 * @LastEditTime: 2020-09-02 16:01:06
 * @LastEditors: Please set LastEditors
 * @Description: 获取搜索引擎联想关键词
 * @FilePath: \Single-Search\src\utils\getSearchExtraData.ts
 */
import axios from 'axios';

// http://suggestqueries.google.com/complete/search?output=toolbar&hl=zh&q=前端
const google = '/googleapi/search';
// param: type,q,cb
const bing = '/bingapi/qsonhs.aspx';
// param: wd
const baidu = '/baiduapi/su';

const getExtraDataFunction = async (eng: string, val: string, extra?: string) => {
  let data: any = {};
  eng = baidu;
  await axios({
    method: 'get',
    url: eng,
    params: {
      wd: val,
      cb: 'data.wdnmd',
    },
  })
    .then((res) => {
      data = res;
    });
  return data.data;
};

const getExtraData = async (eng: string, value: string, extra?: string) => {
  const oldData = await getExtraDataFunction(eng, value);
  // 数据清洗 => 这写法还是那么恶心
  const start = oldData.indexOf('s:[') + 3;
  const end = oldData.lastIndexOf(']});');
  const newData = oldData.slice(start, end).replace(/"/g, '').split(',');
  // console.log(newData);
  return newData;
};

export { getExtraData };
