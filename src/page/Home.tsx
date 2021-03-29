// /*
//  * @Author: Miya
//  * @Date: 2020-05-27 01:24:20
//  * @LastEditTime: 2021-03-28 16:21:43
//  * @LastEditors: Miya
//  * @Description: Home Page
//  * @FilePath: \Single-Search-Front\src\views\Home.tsx
//  * @Version: 2.0
//  */
// import { Component, Prop, Vue } from 'vue-property-decorator';
// import '@/style/home.less';
// // 链接图标
// import Icon from '@/components/icon.tsx';
// // 设置边栏
// import Setting from '@/layout/home/setting.tsx';
// // 链接列表
// import List from '@/layout/home/list.tsx';
// // 搜索框
// import Search from '@/layout/home/search.tsx';
// // 一言
// import Hitokoto from '@/layout/home/hitokoto.tsx';
// // 版权声明
// import Copyright from '@/layout/home/copyright.tsx';
// // 计算搜索结果web工具函数
// import { GET } from '@/utils/ajax';
// // 模型
// import User from '@/model/user.ts';
// import UserSetting from '@/model/setting.ts';
// // 默认数据
// import { userInfo } from '@/config/user.config';
// import { settingInfo } from '@/config/setting.config';
// @Component({
//   // 组件注册
//   components: {
//     's-icon': Icon,
//     's-setting': Setting,
//     's-list': List,
//     's-search': Search,
//     Hitokoto,
//     Copyright
//   }
// })
// export default class Home extends Vue {
//   // data
//   public searchMenu: boolean = false;
//   // 控制设置边栏开关
//   private isSettingOpen: boolean = false;
//   // 控制链接开关
//   private isLinkOpen: boolean = false;
//   // 控制蒙版开关
//   private isMask: boolean = false;
//   // 一言
//   private hitorikoto: string | undefined = '加载中...';
//   // 用户数据
//   private userData: User = userInfo;
//   // 设置数据
//   private userSetting: UserSetting = settingInfo;

//   /**
//    * @description: 获取用户数据
//    * @param {type}
//    * @return {type}
//    */
//   private getUserData() {
//     // user data
//     const user: string | null = localStorage.getItem('s_user_info');
//     // user setting
//     const setting: string | null = localStorage.getItem('s_user_setting');

//     if (user !== null) {
//       this.userData = JSON.parse(user);
//     }
//     if (setting !== null) {
//       this.userSetting = JSON.parse(setting);
//     }
//   }

//   /**
//    * @description: 一言加载
//    * @param {type}
//    * @return: boolean
//    */
//   private async getHitokoto() {
//     const status = this.userSetting.hitokoto;
//     console.log(`是否显示一言:${status}`);
//     if (status === false) {
//       this.hitorikoto = undefined;
//       return false;
//     }
//     const getData = await GET('https://v1.hitokoto.cn');
//     this.hitorikoto = getData.data.hitokoto;
//     return true;
//   }

//   /**
//    * @description: 获取默认搜索引擎并选择
//    * @param {type}
//    * @return void
//    * @author: Miya
//    */
//   private getDefaultSearchEngine() {
//     const eng = this.userData.default_search;
//     this.$store.commit('set_search_engine', eng);
//   }

//   /**
//    * @description: 控制左侧默认隐藏的设置栏
//    * @param {type} stat 状态控制
//    * @return:
//    * @author: Miya
//    */
//   private setSettingStatus(stat: boolean): void {
//     this.$store.commit('is_setting', stat);
//     this.$store.commit('is_mask', stat);
//     this.isSettingOpen = this.$store.state.status.is_setting;
//     this.isMask = this.$store.state.status.is_mask;
//   }

//   /**
//    * @description: 控制右侧默认隐藏的链接列表栏
//    * @param {type} stat 状态控制
//    * @return:
//    * @author: Miya
//    */
//   private setOpenLink(stat: boolean): void {
//     console.log('click');
//     this.$store.commit('is_link', stat);
//     this.$store.commit('is_mask', stat);
//     this.isLinkOpen = this.$store.state.status.is_link;
//     this.isMask = this.$store.state.status.is_mask;
//   }

//   /**
//    * @description: 控制蒙版隐藏
//    * @param {type}
//    * @return:
//    * @author: Miya
//    */
//   private setStatus(stat: boolean): void {
//     this.$store.commit('is_link', stat);
//     this.$store.commit('is_mask', stat);
//     this.$store.commit('is_setting', stat);
//     this.$store.commit('is_inputing', stat);
//     this.isMask = stat;
//     this.searchMenu = stat;
//     this.isLinkOpen = stat;
//     this.isSettingOpen = stat;
//   }

//   private get linkOpenStatus() {
//     return this.isLinkOpen ? 'click' : '';
//   }
//   private get settingOpenStatus() {
//     return this.isSettingOpen ? 'click' : '';
//   }
//   private get linkOpenStatusRightbar() {
//     return this.isLinkOpen ? 'link-active' : '';
//   }
//   private get settingOpenStatusRightbar() {
//     return this.settingOpenStatus ? 'setting-active' : '';
//   }
//   private get maskStatus() {
//     return this.isMask ? 'mask-active' : '';
//   }

//   // mounted
//   private mounted() {
//     this.getUserData();
//     // 默认搜索引擎与链接同步
//     this.getDefaultSearchEngine();
//     // 获取一言
//     this.getHitokoto();
//   }

//   private render() {
//     return (
//       <div class="home">
//         {/* Top Start */}
//         <section class="home__top">
//           <s-icon
//             class="list--button"
//             onHandleClick={() => this.setSettingStatus(true)}
//           >
//             <img src={require('@/assets/user.svg')} alt />
//           </s-icon>
//           <s-icon
//             class={`list--button ${this.linkOpenStatus} ${this.settingOpenStatus}`}
//             onHandleClick={() => this.setOpenLink(true)}
//           >
//             <span class="line top"></span>
//             <span class="line medium"></span>
//             <span class="line bottom"></span>
//           </s-icon>
//         </section>
//         {/* Top End */}

//         {/* Medium Start */}
//         <section class="home__medium">
//           <s-search onSearchMenu={this.searchMenu}></s-search>
//           {this.userSetting.hitokoto ? (
//             // @ts-ignore
//             <Hitokoto hito={this.hitorikoto}></Hitokoto>
//           ) : (
//             ''
//           )}
//         </section>
//         {/* Medium End */}

//         {/* Bottom Start */}
//         <section class="home__bottom">
//           <Copyright
//             // @ts-ignore
//             author={this.userSetting.copyright.author}
//             website={this.userSetting.copyright.website}
//             startdate={this.userSetting.start_date}
//           ></Copyright>
//         </section>
//         {/* Bottom End */}

//         {/* RightBar Start */}
//         <transition-group
//           class={`home__rightbar ${this.linkOpenStatusRightbar} ${this.settingOpenStatusRightbar}`}
//           tag="section"
//           name="slide"
//         >
//           {this.isLinkOpen ? (
//             <section class="home__list" key="1">
//               <List></List>
//             </section>
//           ) : (
//             ''
//           )}
//           {this.isSettingOpen ? (
//             <section class="home__setting" key="2">
//               <Setting></Setting>
//             </section>
//           ) : (
//             ''
//           )}
//         </transition-group>
//         {/* RightBar End */}

//         {/* Float & Extra Start */}
//         <section
//           class={`home__mask ${this.maskStatus}`}
//           onClick={() => this.setStatus(false)}
//         ></section>
//         {/* Float & Extra End */}
//       </div>
//     );
//   }
// }

import { defineComponent, onMounted, reactive,TransitionGroup } from 'vue';

import GlobalIcon from '../components/GlobalIcon';

import HomeSearch from '../components/HomeSearch';
import HomeHitokoto from '../components/HomeHitokoto';
import HomeCopyright from '../components/HomeCopyright';

import '../style/home.less';

import UserIcon from '../assets/user.svg';

const data = reactive({
  searchMenu: false,
  isSettingOpen: false,
  isLinkOpen: false,
  isMask: false,
  hitorikoto: '加载中……',
  userData: {},
  userSetting: {},
});

const Home = defineComponent({
  components: {
    GlobalIcon,
    HomeSearch,
    HomeHitokoto,
    HomeCopyright,
    TransitionGroup
  },
  setup() {
    data;
    return { data };
  },

  render() {
    return (
      <div class="home">
        {/* Top Start */}
        <section class="home__top">
          <Global-Icon class="list--button">
            <img src={UserIcon} alt="" />
          </Global-Icon>
          <Global-Icon class="list--button">
            <span class="line top"></span>
            <span class="line medium"></span>
            <span class="line bottom"></span>
          </Global-Icon>
        </section>
        {/* Top End */}

        {/* Medium Start */}
        <section class="home__medium">
          <Home-Search></Home-Search>
          <Home-Hitokoto></Home-Hitokoto>
        </section>
        {/* Medium End */}

        {/* Bottom Start */}
        <section class="home__bottom">
          <Home-Copyright></Home-Copyright>
        </section>
        {/* Bottom End */}

        {/* Rightbar Start */}
        <transition-group class={`home__rightbar`} tag="section" name="slide">
          <section class="home__list" key="1"></section>
          <section class="home__setting" key="2"></section>
        </transition-group>
        {/* Rightbar End */}

        {/* Extra Start */}
        <section class="home__mask"></section>
        {/* Extra End */}
      </div>
    );
  },
});

export default Home;
