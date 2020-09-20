/*
 * @Author: Miya
 * @Date: 2020-06-06 12:17:38
 * @LastEditTime: 2020-09-20 06:50:34
 * @LastEditors: Miya
 * @Description: Vuex 内的 Mutations
 * @FilePath: /Single-Search/src/store/mutations.ts
 */

const mutations = {
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
  /*
   *  改变 state 里的 user
   *  该变量用于用户数据
   */
  set_user(state: any, data: object) {
    state.user = data;
  },
  /*
   *  改变 state 里的 setting
   *  该变量用于用户数据
   */
  set_setting(state: any, data: object) {
    state.settings.home = data;
  }
};

export { mutations };
