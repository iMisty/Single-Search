/*
 * @Author: Miya
 * @Date: 2021-03-29 10:28:17
 * @LastEditTime: 2021-03-29 11:11:25
 * @LastEditors: Miya
 * @Description:
 * @FilePath: \Single-Search-Front\src\main.ts
 * @Version:
 */
import { createApp } from 'vue';
import router from './router/router';
import vuex from './store/store';
import App from './App';

createApp(App).use(router).use(vuex).mount('#app');
