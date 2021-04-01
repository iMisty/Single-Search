/*
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2020-09-16 16:19:41
 * @LastEditors: Miya
 * @Description: Button component in Mermaid UI
 * @FilePath: \Single-Search\src\components\Mermaid\button.tsx
 * @Version: 0.3
 */
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

// 规定按钮大小
enum Button {
  small = 'small',
  regular = 'regular',
  large = 'large',
  block = 'block'
}

// 规定按钮颜色
enum Color {
  primary = 'primary',
  info = 'info',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  default = 'default',
  secondary = 'secondary'
}

// 规定按钮格式
enum Style {
  round = 'round',
  outline = 'outline',
  link = 'link'
}

@Component({})
export default class MermaidButton extends Vue {
  // Button Width
  // 按钮大小
  @Prop({ default: 'regular' })
  private size?: Button;

  // Button Color
  // 按钮颜色
  @Prop({ default: 'primary' })
  private color?: Color;

  // Button Type
  // 按钮样式
  @Prop({ default: 'round' })
  private type?: Style;

  // Click Event
  // 点击事件
  @Emit('clickevent')
  public handleClick(event) {}

  private render() {
    return (
      <button
        class={`mermaid__btn btn-${this.size} btn-${this.type}-${this.color}`}
        onClick={this.handleClick}
      >
        {this.$slots.default}
      </button>
    );
  }
}
