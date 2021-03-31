/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-28 16:05:24
 * @Description: 一言模块
 * @FilePath: \Single-Search-Front\src\layout\home\hitokoto.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Hitokoto extends Vue {
  @Prop({ default: '加载中...', type: String }) private hito?: string;

  private render() {
    return <div class="hitokoto">{this.hito}</div>;
  }
}
