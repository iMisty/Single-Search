<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-24 18:09:18
-->
<template>
  <div id="App" :class="darkMode">
    <router-view></router-view>
    <!-- <Background></Background> -->
    <external :src="iconsrc"></external>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LINK_ICON } from './config/external.config';
import { install } from '@/utils/install';
// import Background from '@/layout/background.tsx';
import external from '@/components/external';
import { userInfo } from './config/user.config';

@Component({
  // 组件注册
  components: {
    // Background,
    external
  }
})
export default class App extends Vue {
  private isDarkMode = userInfo.dark_style;
  private iconsrc = LINK_ICON;

  private get darkMode() {
    return this.isDarkMode ? 'dark' : '';
  }

  private created() {
    install();
  }
}
</script>
