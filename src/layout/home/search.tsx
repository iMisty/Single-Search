/*
 * @Description: 搜索控件
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:41:27
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-20 08:31:14
 */
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import svgicon from '@/components/svgicon';
import engine from '@/components/Home/engine';
import associate from '@/components/Home/associate';
import { getEngineValue } from '@/utils/getEngineValue.ts';
import { getExtraData } from '@/utils/getSearchExtraData';
import { searchData } from '@/config/search.config';
import { USER_DATA } from '@/config/dataname.config';
import { submitSearch } from '@/utils/submitSearch';
@Component({
  components: {
    engine,
    svgicon,
    associate
  }
})
export default class Search extends Vue {
  // 放大镜图标
  private magnifier: object = require('@/assets/magnifier.svg');
  // 控制搜索框样式
  private isInputing: boolean = false;
  // 判断搜索引擎选择列表是否开启
  private searchMenu: boolean = false;
  // 搜索框文字
  private searchText: string = '';
  // 搜索引擎选择数组
  private searchChoose: any = [];
  // 当前选择的搜索引擎
  private choose?: string = 'baidu';
  // 搜索引擎可选的自带参数
  private extraParam: string | undefined = '';
  // 搜索引擎联想关键词
  private extraDatas: string[] = [];

  /**
   * @name: handleSearchMenu
   * @msg: 弹出搜索引擎选择框
   * @param {type}
   * @return: void
   */
  private handleSearchMenu(status: boolean): void {
    this.$emit('handleSearchMenu');
    this.searchMenu = status;
  }

  /**
   * @name: handleInput
   * @msg: 切换点击 input 时输入框样式
   * @param {type}
   * @return: void
   */
  private setInputStatus(stat: boolean): void {
    this.$store.commit('is_inputing', stat);
    this.isInputing = stat;
  }

  /**
   * @name: getSearchEngines
   * @msg: 获取搜索引擎组件数据
   * @param {type}
   * @return: void
   */
  private getSearchEngines(): void {
    const data = searchData;
    this.searchChoose = data;
  }

  /**
   * @name: getDefaultSearchEngines
   * @msg: 获取默认搜索引擎
   * @param {type}
   * @return: void
   */
  private getDefaultSearchEngines() {
    const defaultSearch = localStorage.getItem(USER_DATA);
    if (defaultSearch !== null) {
      const search = JSON.parse(defaultSearch).default_search;
      console.log(`默认搜索引擎：${search}`);
      this.choose = search;
    }
  }

  /**
   * @name: handleChooseSearchEngine
   * @msg: 点击获取使用的搜索引擎
   * @param {type}
   * @return: void
   */
  private handleChooseSearch(index: number): void {
    const data = getEngineValue(index);
    this.choose = data;
    this.$store.commit('set_search_engine', data);
    console.log(`选中的搜索引擎:${this.$store.state.status.search_engine}`);
    this.extraParam = this.searchChoose[index].extra;
    this.searchMenu = false;
  }

  /**
   * @description: 提交欲搜索的关键词
   * @param {type} e
   * @return: boolean
   * @author: Miya
   */
  private submitSearchText(e: { keyCode: number }) {
    const choose = this.choose;
    const text = this.searchText;
    if (e.keyCode === 13) {
      console.log(choose);
      console.log(text);
      window.open(submitSearch(choose!, text));
      // this.$emit('submit', this.choose, this.searchText, this.extraParam);
      return true;
    }
    return false;
  }

  /**
   * @name: getExtraValue
   * @msg: 提交欲搜索的关键词
   * @param {type}
   * @return: void
   */
  private async getExtraValue() {
    // TODO: 暂时写死 => 用于控制当前选择的搜索引擎
    const eValue = 'baidu';
    const sValue = this.searchText;
    const res = await getExtraData(eValue!, sValue);

    this.extraDatas = res;
  }

  private mounted() {
    this.getSearchEngines();
    this.getDefaultSearchEngines();
  }

  // 计算在输入内容时显示的class
  private get inputing() {
    if (this.isInputing) {
      return `inputing`;
    }
    return null;
  }
  private get searchMenuActive() {
    if (this.searchMenu) {
      return `active`;
    }
    return null;
  }

  // 临时设置： 计算图片
  private get getChooseImg() {
    const temp: any = this.choose;
    const temparray = ['google', 'bing', 'baidu'];
    return temparray.indexOf(temp);
  }

  private render() {
    return (
      <div class="search--bar">
        {/* 搜索引擎logo部分 */}
        <div class="search--bar-logo">
          <img src={require('@/assets/logo.svg')} alt="Logo" />
        </div>
        {/* 搜索引擎内容部分 */}
        <div class={`search--bar-wrap ${this.inputing}`}>
          <section
            class="search--bar-choose"
            onMouseover={() => this.handleSearchMenu(true)}
            onMouseout={() => this.handleSearchMenu(false)}
          >
            <div class="search--bar-choose-engine" data-choose={this.choose}>
              <img
                src={this.$store.state.searchList[this.getChooseImg].icon}
                style="width: 1.5rem"
              />
            </div>
            <ul class={`choose-engine ${this.searchMenuActive}`}>
              {this.searchChoose.map(
                (item: { icon: string }, index: number) => {
                  return (
                    <engine
                      icon={item.icon}
                      onChoose={() => this.handleChooseSearch(index)}
                    ></engine>
                  );
                }
              )}
            </ul>
          </section>
          <section class="search--bar-input">
            <input
              type="text"
              placeholder="请输入搜索内容"
              v-model={this.searchText}
              onClick={() => this.setInputStatus(true)}
              onBlur={() => this.setInputStatus(false)}
              onKeydown={(e: any) => this.submitSearchText(e)}
              // onInput={this.getExtraValue}
            />
          </section>
          {this.extraDatas[0] !== '' ? (
            <section class="search--bar-suomi">
              <associate data={this.extraDatas}></associate>
            </section>
          ) : null}
          <section
            class="search--bar-submit"
            onClick={() => this.submitSearchText}
          >
            <img src={this.magnifier} />
          </section>
        </div>
      </div>
    );
  }
}
