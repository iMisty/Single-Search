import { Component, Vue, Prop } from 'vue-property-decorator';
import svgicon from '@/components/svgicon';
@Component({
  components: {
    svgicon
  }
})
export default class ListItem extends Vue {
  // 标题图标
  @Prop() private icon!: string;
  // 标题字体颜色
  @Prop() private color!: string;
  // 标题文字
  @Prop() private title!: string;
  // 链接信息
  @Prop() private link!: any[];

  private render() {
    return (
      <div class="list__item">
        <section class="list__item--title">
          <svgicon
            className="svg-title-icon"
            svgClass="icon"
            iconClass={this.icon}
            iconName={this.icon}
          ></svgicon>
          <h5 style={`color: ${this.color}`}>{this.title}</h5>
        </section>
        <ul class="list__item--link">
          {this.link.map((item, index) => {
            return (
              <li class="item" data-index={index}>
                <a href={item.link} target="_blank">
                  <svgicon
                    class="svg-link-icon"
                    svgClass="icon"
                    iconClass={item.icon}
                    iconName={item.icon}
                  ></svgicon>
                  <p>{item.text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
