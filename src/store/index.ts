/*
 * @Description: Vuex
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-07 23:37:50
 */
import Vue from 'vue';
import Vuex from 'vuex';

import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

