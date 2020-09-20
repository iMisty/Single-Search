<!--
 * @Description: 首页前端页面
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-20 06:05:14
-->
<template>
  <div class="home">
    <!-- Top start -->
    <section class="home__top">
      <Icon class="list--button" @handleClick="setSettingStatus(true)">
        <img src="@/assets/user.svg" alt />
      </Icon>
      <Icon
        class="list--button"
        @handleClick="setOpenLink(true)"
        :class="{ click: isLinkOpen, click: isSettingOpen }"
      >
        <span class="line top"></span>
        <span class="line medium"></span>
        <span class="line bottom"></span>
      </Icon>
    </section>
    <!-- Top end -->

    <!-- Medium start -->
    <section class="home__medium">
      <Search :searchMenu="searchMenu"></Search>
      <Hitokoto :hito="hitorikoto" v-show="hitorikoto"></Hitokoto>
    </section>
    <!-- Medium end -->

    <!-- Bottom start -->
    <section class="home__bottom">
      <Copyright
        :author="userSetting.copyright.author"
        :website="userSetting.copyright.website"
        :startdate="userSetting.start_date"
      ></Copyright>
    </section>
    <!-- Bottom end -->

    <!-- RightBar start -->
    <transition-group
      class="home__rightbar"
      :class="{ 'link-active': isLinkOpen, 'setting-active': isSettingOpen }"
      tag="section"
      name="slide"
    >
      <section class="home__list" v-show="isLinkOpen" :key="1">
        <List></List>
      </section>
      <section class="home__setting" v-show="isSettingOpen" :key="2">
        <Setting></Setting>
      </section>
    </transition-group>
    <!-- RightBar end -->

    <!-- Float & Extra start -->
    <section
      class="home__mask"
      :class="{ 'mask-active': isMask }"
      @click="setStatus(false)"
    ></section>
    <!-- Float & Extra end -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import '@/style/home.less';
// 链接图标
import Icon from '@/components/icon.tsx';
// 设置边栏
import Setting from '@/layout/home/setting.tsx';
// 链接列表
import List from '@/layout/home/list.tsx';
// 搜索框
import Search from '@/layout/home/search.tsx';
// 计算搜索结果web工具函数
import { GET } from '@/utils/ajax';
// 模型
import User from '@/model/user.ts';
import UserSetting from '@/model/setting.ts';

@Component({
  // 组件注册
  components: {
    Icon,
    Setting,
    List,
    Search,
    Hitokoto: () => import('@/layout/home/hitokoto.tsx'),
    Copyright: () => import('@/layout/home/copyright.tsx')
  }
})
export default class Home extends Vue {
  // data
  public searchMenu: boolean = false;
  // 控制设置边栏开关
  private isSettingOpen: boolean = false;
  // 控制链接开关
  private isLinkOpen: boolean = false;
  // 控制蒙版开关
  private isMask: boolean = false;
  // 一言
  private hitorikoto: string | undefined = '加载中...';
  // 用户数据
  private userData: User = {
    name: 'Miya',
    sex: 'female',
    avatar: '',
    introduce: '只是一个默认用户',
    dark_style: false,
    default_search: 'bing'
  };
  // 设置数据
  private userSetting: UserSetting = {
    background: 'https://i.loli.net/2020/06/13/Tsa8uqY2gbjRndw.jpg',
    search_logo: require('@/assets/logo.svg'),
    blur_style: true,
    hitokoto: false,
    copyright: {
      author: 'Miya',
      website: 'https://github.com/imisty'
    },
    start_date: '2005-05-04'
  };

  // methods
  /**
   * @description: 获取用户数据
   * @param {type}
   * @return {type}
   */
  private getUserData() {
    // user data
    const user: string | null = localStorage.getItem('s_user_info');
    // user setting
    const setting: string | null = localStorage.getItem('s_user_setting');

    if (user !== null) {
      // @ts-ignore
      this.userData = JSON.parse(user);
    }
    if (setting !== null) {
      // @ts-ignore
      this.userSetting = JSON.parse(setting);
    }
  }

  /**
   * @description: 一言加载
   * @param {type}
   * @return: boolean
   */
  private async getHitokoto() {
    const status = this.userSetting.hitokoto;
    console.log(`是否显示一言:${status}`);
    if (status === false) {
      this.hitorikoto = undefined;
      return false;
    }
    const getData = await GET('https://v1.hitokoto.cn');
    this.hitorikoto = getData.data.hitokoto;
    return true;
  }

  /**
   * @description: 获取默认搜索引擎并选择
   * @param {type}
   * @return void
   * @author: Miya
   */
  private getDefaultSearchEngine() {
    const eng = this.userData.default_search;
    this.$store.commit('set_search_engine', eng);
  }

  /**
   * @description: 控制左侧默认隐藏的设置栏
   * @param {type} stat 状态控制
   * @return:
   * @author: Miya
   */
  private setSettingStatus(stat: boolean): void {
    this.$store.commit('is_setting', stat);
    this.$store.commit('is_mask', stat);
    this.isSettingOpen = this.$store.state.status.is_setting;
    this.isMask = this.$store.state.status.is_mask;
  }

  /**
   * @description: 控制右侧默认隐藏的链接列表栏
   * @param {type} stat 状态控制
   * @return:
   * @author: Miya
   */
  private setOpenLink(stat: boolean): void {
    console.log('click');
    this.$store.commit('is_link', stat);
    this.$store.commit('is_mask', stat);
    this.isLinkOpen = this.$store.state.status.is_link;
    this.isMask = this.$store.state.status.is_mask;
  }

  /**
   * @description: 控制蒙版隐藏
   * @param {type}
   * @return:
   * @author: Miya
   */
  private setStatus(stat: boolean): void {
    this.$store.commit('is_link', stat);
    this.$store.commit('is_mask', stat);
    this.$store.commit('is_setting', stat);
    this.$store.commit('is_inputing', stat);
    this.isMask = stat;
    this.searchMenu = stat;
    this.isLinkOpen = stat;
    this.isSettingOpen = stat;
  }

  // mounted
  private mounted() {
    this.getUserData();
    // 默认搜索引擎与链接同步
    this.getDefaultSearchEngine();
    // 获取一言
    this.getHitokoto();
  }
}
</script>
