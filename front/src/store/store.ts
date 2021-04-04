/*
 * @Author: Miya
 * @Date: 2021-03-29 10:55:47
 * @LastEditTime: 2021-03-29 10:59:26
 * @LastEditors: Miya
 * @Description: Vuex
 * @FilePath: \Single-Search-Front\src\store\store.ts
 * @Version: 2.0
 */

import { createStore } from 'vuex';

const defaultStore = {
  // 登录token
  token: '',
  // 搜索引擎列表
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
    },
    {
      icon: 'https://github.com/fluidicon.png',
      text: 'GitHub',
      name: 'github',
      header: 'https://github.com/search?q=',
      extra: ''
    }
  ],
  // 控制状态
  status: {
    // 是否开启遮罩层
    isMask: false,
    // 是否开启链接边栏
    isLink: false,
    // 是否开启设置边栏
    isSetting: false
  }
};

const store = createStore({
  state() {
    return defaultStore;
  },
  mutations: {
      /*
   *  改变 status 中的 is_mask
   *  该变量用于修改是否开启蒙层
   */
  is_mask(state: any, data: boolean) {
    state.status.is_mask = data;
  },
  /*
   *  改变 status 中的 is_setting
   *  该变量用于修改是否开启用户设置边栏
   */
  is_setting(state: any, data: boolean) {
    state.status.is_setting = data;
  },
  /*
   *  改变 status 中的 is_link
   *  该变量用于修改是否开启右侧导航链接边栏
   */
  is_link(state: any, data: boolean) {
    state.status.is_link = data;
  },
  /*
   *  改变 status 中的 isInputing
   *  该变量用于修改聚焦后是否打开对应的 active CSS class
   */
  is_inputing(state: any, isInputing: boolean) {
    state.status.isInputing = isInputing;
  },
  /*
   *  改变 status 中的 search_engine
   *  该变量用于修改选中的搜索引擎文字
   */
  set_search_engine(state: any, data: string) {
    state.status.search_engine = data;
  },
  /*
   *  改变 state 里的 token
   *  该变量用于登录与退出
   */
  set_token(state: any, token: string) {
    state.token = token;
  },
  },
});

export default store;
