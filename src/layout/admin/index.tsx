/*
 * @Author: Miya
 * @Date: 2020-07-23 15:49:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-19 16:36:48
 * @Description: 后台管理首页
 * @FilePath: /Single-Search/src/layout/admin/index.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
// 卡片式框架组件
import puzzle from '@/components/Admin/puzzle.tsx';
// 计数器组件
import linksum from '@/components/Admin/linksum.tsx';
import Sum from '@/model/sum';
@Component({
  components: {
    puzzle,
    'link-sum': linksum
  }
})
export default class IndexAdmin extends Vue {
  // 目前已经拥有的链接分类总数
  private linkSortSum: Sum = {
    title: '分类总数',
    sum: 0,
    color: 'red'
  };
  // 目前已经拥有的链接总数
  private linkSum: Sum = {
    title: '链接总数',
    sum: 0,
    color: 'purple'
  };
  // 目前已经拥有的搜索引擎总数
  private SearchSum: Sum = {
    title: '搜索引擎总数',
    sum: 0,
    color: 'green'
  };

  // 获取当前localStorage中的链接存放数目
  private getLinkSum() {
    // 获取数据
    const data = localStorage.getItem('s_user_link');
    if (data !== null) {
      // 分类总数
      this.linkSortSum.sum = JSON.parse(data).length;
      // 链接总数
      for (const key of JSON.parse(data)) {
        this.linkSum.sum += key.items.length;
      }
    }
    return true;
  }

  // 获取当前Vuex中的搜索引擎数目
  private getSearchEngineSum() {
    const data = this.$store.state.searchList;
    this.SearchSum.sum = data.length;
    return true;
  }

  private mounted() {
    this.getLinkSum();
    this.getSearchEngineSum();
  }

  private render() {
    return (
      <div class="admin__index">
        <section class="admin__wrap--puzzle">
          <puzzle row="1" column="1">
            <link-sum result={this.linkSortSum}></link-sum>
          </puzzle>
          <puzzle row="1" column="1">
            <link-sum result={this.linkSum}></link-sum>
          </puzzle>
          <puzzle row="1" column="1">
            <link-sum result={this.SearchSum}></link-sum>
          </puzzle>
        </section>
      </div>
    );
  }
}
