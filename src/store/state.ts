/*
 * @Author: Miya
 * @Date: 2020-06-06 12:20:47
 * @LastEditTime: 2020-09-20 06:49:28
 * @LastEditors: Miya
 * @Description: Vuex State部分
 * @FilePath: /Single-Search/src/store/state.ts
 */

const state = {
  // 登录相关
  // token:
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLC.caAFsUUgzA0bPJtKfkH-4Hk',
  token: '',
  // 搜索引擎列表
  // api.xxx.com/search/list
  searchList: [
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
  ],
  // 控制状态
  status: {
    // 是否开启遮罩层
    is_mask: false,
    // 是否输入状态
    is_inputing: false,
    // 控制链接边栏开关
    is_link: false,
    // 控制设置边栏开关
    is_setting: false,
    // 当前选中的搜索引擎
    search_engine: ''
    // // 当前输入的关键词
    // search_text: '',
    // // 搜索引擎联想数据
    // search_association: []
  }
};

export { state };
