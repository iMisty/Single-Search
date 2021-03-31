/*
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2020-09-17 11:39:01
 * @LastEditors: Miya
 * @Description: 输入框组件
 * @FilePath: \Single-Search\src\components\input.tsx
 * @Version: 0.1
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class FormInput extends Vue {
  // 选择表单形式
  @Prop({ required: true, default: 'text' }) private type!: string;
  // 选择表单标题
  @Prop({ required: true, default: 'Input' }) private title!: string;

  // data
  private value: string = '';
  private hasValue: boolean = false;

  // 聚焦事件
  private focus() {
    this.hasValue = true;
    console.log(this.hasValue);
  }
  // 失焦事件
  private blur() {
    if (this.value !== '') {
      this.hasValue = false;
      return true;
    }
    return true;
  }
  // 输入事件
  private change() {
    console.log(this.value);
    this.$emit('inputValue', this.value);
  }

  get hasValueActive() {
    if (this.hasValue === true) {
      return `activing`;
    }
    return '';
  }

  private render() {
    return (
      <div>
        <label class="mermaid__input">
          <p class={`mermaid__input--title ${this.hasValueActive}`}>
            {this.title}
          </p>
          <input
            class="mermaid__input--input"
            type={this.type}
            v-model={this.value}
            value={this.value}
            onChange={() => this.change()}
            onFocus={() => this.focus()}
            onBlur={() => this.blur()}
          />
        </label>
        <p>{this.value}</p>
      </div>
    );
  }
}
