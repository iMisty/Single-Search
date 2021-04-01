import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Puzzle extends Vue {
  // @Props: title => 标题
  @Prop({ default: 'Test Puzzle' })
  public title?: string;

  // @Props: text => 内容
  @Prop({ default: 'This is a test text.' })
  public text?: string;

  // 组件占用的空间
  @Prop({ default: 2 })
  private row?: number;

  @Prop({ default: 2 })
  private column?: number;

  // computed
  private get rowClass(): string {
    return `row-${this.row}`;
  }
  private get columnClass(): string {
    return `column-${this.column}`;
  }
  private render() {
    return (
      <section class={`puzzle-wrap ${this.rowClass} ${this.columnClass}`}>
        {this.$slots.default ? (
          this.$slots.default
        ) : (
          <div>
            <div class="puzzle-title">{this.title}</div>
            <div class="puzzle-text">{this.text}</div>
          </div>
        )}
      </section>
    );
  }
}
