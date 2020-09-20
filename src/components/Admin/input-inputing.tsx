import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})
export default class InputingInput extends Vue {
  // tips图标
  private tipsicon: object = require('@/assets/tips.svg');

  // 题目
  @Prop({ default: '测试标题', required: true })
  private title!: string;

  // Name
  @Prop({ default: 'setting' })
  private name!: string;

  // 类型
  @Prop({ default: 'text' })
  private type!: string;

  // 输入框类型
  @Prop({ default: 'line' })
  private style!: string;

  // 聚焦边框颜色
  @Prop({ default: 'default' })
  private color!: string;

  // 是否需要指引内容
  @Prop({ default: false })
  private needtip!: boolean;

  // 指引文字
  @Prop()
  private tiptext?: string;

  // 是否禁止修改
  @Prop({ default: false })
  private disabled?: boolean;

  // 输入文字
  @Prop()
  private value?: string;

  // 点击事件
  @Emit('clickevent')
  private clickEvent() {}

  // 聚焦事件
  @Emit('focusevent')
  private focusEvent() {}

  // 修改事件
  @Emit('changeevent')
  private changeEvent() {}

  // 失焦事件
  @Emit('blurevent')
  private blurEvent() {}

  private render() {
    return (
      <div class="admin__user--setting">
        <section class="admin__user--setting--title">
          <h5>{this.title}</h5>
          {this.needtip ? (
            <section class="admin__user--setting--tips">
              <img
                class="admin__user--setting--tips--image"
                src={this.tipsicon}
              />
              <div class="admin__user--setting--tips--text">{this.tiptext}</div>
            </section>
          ) : (
            ''
          )}
        </section>
        <input
          class={`mermaid__input input--color--${this.color}`}
          type={this.type}
          name={this.name}
          value={this.value}
          v-model={this.value}
          onClick={() => this.clickEvent()}
          onFocus={() => this.focusEvent()}
          onChange={() => this.changeEvent()}
          onBlur={() => this.blurEvent()}
        />
      </div>
    );
  }
}
