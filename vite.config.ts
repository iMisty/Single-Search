/*
 * @Author: Miya
 * @Date: 2021-03-29 10:28:17
 * @LastEditTime: 2021-03-29 10:43:13
 * @LastEditors: Miya
 * @Description: vue-config
 * @FilePath: \Single-Search-Front\vite.config.ts
 * @Version: 2.0
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [vue(), vueJSX()],
});
