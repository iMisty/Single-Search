/*
 * @Author: Miya
 * @Date: 2020-06-08 17:42:30
 * @LastEditTime: 2020-09-18 18:32:54
 * @LastEditors: Miya
 * @Description: SVG 图标支持
 * @FilePath: \Single-Search\src\components\svgicon.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Svgicon extends Vue {
  // Props
  @Prop({ required: true }) public iconClass?: string;
  @Prop() public className?: string;

  // Computed

  get iconName(): string | undefined {
    return `#icon-${this.iconClass}`;
  }

  get svgClass(): string {
    if (this.className) {
      return `svg-icon ${this.className}`;
    } else {
      return 'svg-icon';
    }
  }
  protected render() {
    return (
      <svg class={this.svgClass} aria-hidden="true">
        <use xlinkHref={this.iconName} />
      </svg>
    );
  }
}
