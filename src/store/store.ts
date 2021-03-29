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
  count: 0,
};

const store = createStore({
  state() {
    return defaultStore;
  },
  mutations: {},
});

export default store;
