/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-28 21:52:51
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-30 14:50:02
 * @Description: file content
 * @FilePath: \Single-Search-API\src\util.ts
 */
import axios from 'axios';
import iconv = require('iconv-lite');
// import xml2js = require('xml2js');

/**
 * @description: 获取百度搜索引擎内容
 * @param {string}
 * @return {array}
 */
const getBaiduData = async (eng: string, val: string) => {
  let data: any = {};
  await axios({
    method: 'get',
    url: eng,
    params: {
      wd: val,
      cb: 'data.wdnmd',
    },
    responseType: 'arraybuffer',
  }).then((res) => {
    data = iconv.decode(res.data, 'gb2312');
    console.log(data);
  });
  return data;
};

/**
 * @description: 获取必应搜索引擎内容
 * @param {string}
 * @return {array}
 */
const getBingData = async (eng: string, val: string) => {
  let data: any = {};
  await axios({
    method: 'get',
    url: eng,
    params: {
      type: 'cb',
      q: val,
    },
  }).then((res) => {
    data = res.data;
  });
  return data;
};

/**
 * @description: 获取谷歌搜索引擎内容
 * @param {string}
 * @return {array}
 */
// export const getGoogleData = async (eng: string, val: string) => {
//   // let data: any = {};
//   // console.log(`谷歌搜索开始`);
//   // console.log(eng);
//   // console.log(val);
//   // await axios({
//   //   method: 'get',
//   //   url: eng,
//   //   params: {
//   //     output: 'toolbar',
//   //     hl: 'zh',
//   //     q: val,
//   //   },
//   // }).then((res) => {
//   //   console.log(`谷歌搜索结束`);
//   //   console.log(`data: ${res}`);
//   //   data = res;
//   //   // console.log(res);
//   //   // const temp = res;
//   //   // const parseString = xml2js.parseString;
//   //   // parseString(temp, (err, result) => {
//   //   //   console.dir(JSON.stringify(result.toplevel.CompleteSuggestion));
//   //   //   data = result;
//   //   // });
//   // });
//   // return data;
// };

/**
 * @description: 返回数组内容
 * @param {string}
 * @return {array}
 */
export const resultBaiduData = async (eng: string, value: string) => {
  const oldData = await getBaiduData(eng, value);
  const start = oldData.indexOf('s:[') + 3;
  const end = oldData.lastIndexOf(']});');
  const newData = oldData.slice(start, end).replace(/"/g, '').split(',');
  // console.log(newData);
  return newData;
};

export const resultBingData = async (eng: string, value: string) => {
  const oldData = await getBingData(eng, value);
  const result = oldData.AS.Results[0].Suggests.map((item: { Txt: string }) => {
    return item.Txt;
  });
  return result;
};

export const resultGoogleData = async (eng: string, value: string) => {
  const result = await resultBingData(eng, value);
  // const oldData = '[{"suggestion":[{"$":{"data":"1111"}}]},{"suggestion":[{"$":{"data":"11111"}}]},{"suggestion":[{"$":{"data":"11111什么意思"}}]},{"suggestion":[{"$":{"data":"1111 意思"}}]},{"suggestion":[{"$":{"data":"1111人才獵聘"}}]},{"suggestion":[{"$":{"data":"1111大学网"}}]},{"suggestion":[{"$":{"data":"1111星座"}}]},{"suggestion":[{"$":{"data":"1111 angel number"}}]},{"suggestion":[{"$":{"data":"1111商搜"}}]},{"suggestion":[{"$":{"data":"1111=0"}}]}]';
  // const temp = JSON.parse(oldData);
  // const result = temp.map((item: { suggestion: { $: { data: any } }[] }) => {
  //   return item.suggestion[0].$.data;
  // });
  // return result;
  return result;
};
