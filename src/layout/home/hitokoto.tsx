/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-26 22:32:01
 * @Description: 一言模块
 * @FilePath: /Single-Search/src/components/Home/bottom/hitokoto.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Hitokoto extends Vue {
  @Prop({ default: '加载中...', type: String }) public hito!: string;

  private render() {
    return <div class="hitokoto">{this.hito}</div>;
  }
}
