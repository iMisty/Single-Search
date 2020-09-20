/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-08-27 00:50:03
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 18:31:43
 * @Description: 首页右侧边栏使用头像
 * @FilePath: \Single-Search\src\components\avatar.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Avatar extends Vue {
  // 头像名称
  @Prop() private image?: object;
  @Prop() private sex?: string;
  // 计算 class
  get class() {
    return `setting__wrap--avatar--${this.sex}`;
  }

  protected render() {
    return (
      <section class={this.class}>
        <img src={this.image} />
      </section>
    );
  }
}
