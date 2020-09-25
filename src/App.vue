<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-25 16:50:53
-->
<template>
  <div id="App" :class="darkMode">
    <router-view></router-view>
    <external :src="iconsrc"></external>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { LINK_ICON } from '@/config/external.config';
import { USER_DATA } from '@/config/dataname.config';
import { install } from '@/utils/install';
import { getLocalStorage } from '@/utils/GetLocalStorage';
import external from '@/components/external';

@Component({
  // 组件注册
  components: {
    external
  }
})
export default class App extends Vue {
  private isDarkMode;
  private iconsrc = LINK_ICON;

  private get darkMode() {
    return this.isDarkMode ? 'dark' : 'light';
  }

  private getStyleData() {
    const data = getLocalStorage(USER_DATA);
    // @ts-ignore
    const style = data.dark_style;
    this.isDarkMode = style;
    this.$store.state.is_darkmode = style;
  }

  private created() {
    install();
    this.getStyleData();
  }
}
</script>
