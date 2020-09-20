/*
 * @Author: Miya
 * @Date: 2020-05-27 14:28:24
 * @LastEditTime: 2020-06-17 16:11:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/shims-vue.d.ts
 */ 
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module '*.less' {
  const less: any;
  export default less;
}