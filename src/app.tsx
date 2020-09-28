/*
 * @Author: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditTime: 2020-09-28 15:44:05
 * @LastEditors: Miya
 * @Description: Main TSX
 * @FilePath: \Single-Search-Front\src\app.tsx
 * @Version: 1.0
 */
import { Component, Vue } from 'vue-property-decorator';
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
  private isDarkMode?: boolean;
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
  private render() {
    return (
      <div id="app">
        <router-view></router-view>
        <external src={this.iconsrc}></external>
      </div>
    );
  }
}
