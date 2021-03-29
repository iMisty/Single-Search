/*
 * @Author: Miya
 * @Date: 2020-05-26 21:41:27
 * @LastEditTime: 2021-03-29 17:24:13
 * @LastEditors: Miya
 * @Description: Search Component
 * @FilePath: \Single-Search-Front\src\components\HomeSearch.tsx
 * @Version: 2.0
 */
import { defineComponent, reactive } from 'vue';
import GlobalIcon from './GlobalIcon';
import HomeSearchAssociate from './HomeSearchAssociate';
import LogoImage from '../assets/logo.svg';
import GoogleLogo from '../assets/search/google.svg';

const data = reactive({
  mock: ['2', '3', '4'],
});

const HomeSearch = defineComponent({
  components: {
    GlobalIcon,
    HomeSearchAssociate,
  },
  setup() {
    data;
    return { data };
  },

  render() {
    return (
      <div class="search--bar">
        {/* 搜索引擎logo部分 */}
        <div class="search--bar-logo">
          <img src={LogoImage} alt={LogoImage} />
        </div>
        {/* 搜索引擎内容部分 */}

        {/* TODO: class名添加判定是否为输入状态 */}
        <div class="search--bar-wrap">
          {/* 搜索引擎控制 */}
          <section class="search--bar-choose">
            {/* TODO: 追踪点击数据，使用data-choose */}
            <div class="search--bar-choose-engine">
              {/* TODO: src替换动态 */}
              <img src={GoogleLogo} alt="" style="width:1.5rem" />
            </div>
          </section>

          {/* 搜索引擎输入部分 */}
          <section class="search--bar-input">
            <input
              type="text"
              placeholder="请输入搜索内容"
              // v-model={this.searchText}
              // onClick={() => this.setInputStatus(true)}
              // onBlur={() => this.setInputStatus(false)}
              // onInput={this.getSearchExtra}
              // onKeydown={(e: any) => this.submitSearchText(e, false)}
            />
          </section>
          {/* 搜索引擎提交部分 */}
          <section class="search--bar-submit">
            {/* TODO: 增加点击事件 */}
            <button>点了一下</button>
          </section>
          {/* 搜索词联想框 */}
          <Home-Search-Associate extra={this.data.mock}></Home-Search-Associate>
        </div>
      </div>
    );
  },
});

export default HomeSearch;
