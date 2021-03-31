/*
 * @Description: 选择搜索引擎组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-11 23:32:14
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-17 00:41:34
 */
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import svgicon from '@/components/svgicon';
@Component({
  // 组件注册
  components: {
    svgicon
  }
})
export default class SearchEngine extends Vue {
  // props
  @Prop()
  private icon?: object | string;

  @Prop()
  private value?: string;

  /**
   * @name: handleChooseSearchEngine
   * @msg: 点击获取使用的搜索引擎
   * @param {type}
   * @return: void
   */
  @Emit('choose')
  private handleChooseEngine(): void {}

  private render() {
    return (
      <li class="choose-engine-wrap" onClick={this.handleChooseEngine}>
        {/* <svgicon
          class="svg-icon svg-title-icon"
          svgClass="icon"
          iconClass={this.iconValue}
          iconName={this.iconValue}
        ></svgicon> */}
        <img src={this.icon} />
        <p class="choose-engine-wrap-text">{this.value}</p>
      </li>
    );
  }
}
