/*
 * @Author: Miya
 * @Date: 2020-07-23 18:14:32
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-17 11:07:46
 * @Description: 数据总量显示
 * @FilePath: \Single-Search\src\layout\admin\result.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class ResultAdmin extends Vue {
  // @Props: title => 标题
  @Prop({ default: 'Total Links:' })
  public title?: string;

  // @Props: colorClass => 数字左颜色，可选颜色见var.less:54
  @Prop({ default: 'purple' })
  public colorClass?: string;

  // @Props: sum => 计算总数
  @Prop({ default: 190 })
  public sum?: number;

  protected render() {
    return (
      <article class="admin-wrap-result">
        <div class="result-title">{this.title}</div>
        <div class={`result-sum ${this.colorClass}`}>{this.sum}</div>
      </article>
    );
  }
}
