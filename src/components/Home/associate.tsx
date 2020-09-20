/*
 * @Description: 搜索词联想框
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-06-23 00:43:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-02 15:43:25
*/
import { Component, Prop, Vue } from 'vue-property-decorator';
import { submitSearch } from '@/utils/submitSearch';

@Component({
  // 组件注册
  components: {}
})
export default class Associate extends Vue {
  // 接收联想关键词数据
  @Prop() private data!: string[];

  // 点击列表项目进行关键词搜索
  private async handleExtraSearch(item: string) {
    const eng = this.$store.state.status.search_engine;
    const submit = submitSearch(eng, item);
    console.log(submit);
    window.open(submit);
  }
  private render() {
    return (
      <div class="associate">
        <ul class="associate-list">
          {
            this.data.map((item: string) => {
              return (<li class="associate-item" onClick={() => this.handleExtraSearch(item)}>{item}</li>);
            })
          }
        </ul>
      </div >
    );
  }
}
