/*
 * @Author: Miya
 * @Date: 2020-06-24 21:38:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-20 05:49:26
 * @Description: 背景图片设置
 * @FilePath: /Single-Search/src/layout/background.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import UserSetting from '@/model/setting';
import { SETTING_DATA } from '@/config/dataname.config';
import '@/style/background.less';
@Component({})
export default class Background extends Vue {
  private style = {
    backgroundImage: ''
  };

  private mounted() {
    const getData: string | null = localStorage.getItem(SETTING_DATA);
    if (getData !== null) {
      const temp: UserSetting = JSON.parse(getData);
      this.style.backgroundImage = `url(${temp.background})`;
    }
  }

  private render() {
    return <div class={`background`} style={this.style}></div>;
  }
}
