/*
 * @Author: Miya
 * @Date: 2020-09-18 16:04:27
 * @LastEditTime: 2020-09-18 17:51:53
 * @LastEditors: Miya
 * @Description: 搜索引擎配置数据
 * @FilePath: \Single-Search\src\config\search.config.ts
 * @Version:
 */
interface Search {
  // 图标logo
  icon: string | object;
  // 显示文字
  text: string;
  // 英文文字
  name: string;
  // 搜索链接前缀
  header: string;
  // 是否需要后缀
  extra?: string;
}

export const searchData: Search[] = [
  {
    icon: require('@/assets/search/google.svg'),
    text: '谷歌',
    name: 'google',
    header: 'https://www.google.com/search?q=',
    extra: ''
  },
  {
    icon: require('@/assets/search/bing.svg'),
    text: '必应',
    name: 'bing',
    header: 'https://cn.bing.com/search?q=',
    extra: ''
  },
  {
    icon: require('@/assets/search/baidu.svg'),
    text: '百度',
    name: 'baidu',
    header: 'https://www.baidu.com/s?wd=',
    extra: ''
  }
];
