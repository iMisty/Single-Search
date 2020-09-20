<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-20 05:43:38
-->
<template>
  <div id="App">
    <router-view></router-view>
    <Background></Background>
    <external :src="iconsrc"></external>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LINK_ICON } from './config/external.config';
import { install } from '@/utils/install';
import Background from '@/layout/background.tsx';
import external from '@/components/external';

@Component({
  // 组件注册
  components: {
    Background,
    external
  }
})
export default class App extends Vue {
  private iconsrc = LINK_ICON;

  private created() {
    install();
  }
}
</script>
