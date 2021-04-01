import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import Switch from '@/components/Mermaid/switch.tsx';

@Component({
  components: {
    'm-switch': Switch
  }
})
export default class CheckoutInput extends Vue {
  // tips图标
  private tipsicon: object = require('@/assets/tips.svg');

  // 题目
  @Prop({ default: '测试标题', required: true })
  private title!: string;

  // 是否需要指引内容
  @Prop({ default: false })
  private needtip!: boolean;

  // 指引文字
  @Prop()
  private tiptext?: string;

  // 选项状态
  @Prop()
  private status!: boolean;

  // 是否禁止修改
  @Prop({ default: false })
  private disabled?: boolean;

  // 点击事件
  @Emit('clickevent')
  private clickEvent() {}

  private render() {
    return (
      <div class="admin__user--setting">
        {/* 标题 */}
        <section class="admin__user--setting--title">
          <h5>{this.title}</h5>
          {/* 引导内容 */}
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
        <section class="admin__user--setting--checkpoint">
          <section class="admin__user--setting--checkpoint--item">
            <m-switch
              status={this.status}
              disabled={this.disabled}
              onClickevent={() => this.clickEvent()}
            ></m-switch>
          </section>
        </section>
      </div>
    );
  }
}
