/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-20 00:31:34
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-20 06:49:56
 * @Description: 设置页面系统设置部分
 * @FilePath: /Single-Search/src/layout/admin/setting-system.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
// checkbox
import checkbox from '@/components/Admin/input-checkbox';
import Button from '@/components/Mermaid/button';
import { SETTING_DATA } from '@/config/dataname.config';

interface Setting {
  background: string;
  search_logo: string;
  blur_style: boolean;
  hitokoto: boolean;
  copyright: {
    author: string;
    website: string;
  };
  start_date: string;
}
@Component({
  components: {
    'input-checkbox': checkbox,
    'm-button': Button
  }
})
export default class SettingsAdmin extends Vue {
  // tips图标
  private tipsicon: object = require('@/assets/tips.svg');
  // 设置数据
  private settingData: Setting = {
    background: '',
    search_logo: '',
    blur_style: false,
    hitokoto: false,
    copyright: {
      author: '',
      website: ''
    },
    start_date: ''
  };

  // 保存状态
  private statusSuccess: boolean = false;

  // 获取数据
  private getSettingData() {
    const settingData = localStorage.getItem(SETTING_DATA);
    if (settingData !== null) {
      this.settingData = JSON.parse(settingData);
    }
  }

  // 修改毛玻璃支持
  private setBlurBackgroundStatus() {
    this.settingData.blur_style = !this.settingData.blur_style;
  }

  // 修改一言
  private setHitokotoStatus() {
    this.settingData.hitokoto = !this.settingData.hitokoto;
  }

  // 修改数据并保存
  private handleSave() {
    const data = this.settingData;
    console.log(`新数据： ${JSON.stringify(this.settingData)}`);
    localStorage.setItem(SETTING_DATA, JSON.stringify(data));
    this.statusSuccess = true;
    setTimeout(() => {
      this.statusSuccess = false;
    }, 3000);
  }

  private mounted() {
    this.getSettingData();
  }

  private render() {
    return (
      <div class="content">
        <div class="admin__settings">
          {/* 首页背景图片 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>背景图片</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">依然没什么用</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.settingData.background}
              v-model={this.settingData.background}
            />
            <div class="admin__preview">
              <img src={this.settingData.background} alt="" />
            </div>
          </div>
          {/* 首页 logo */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>搜索处logo</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">依然没什么用</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.settingData.search_logo}
              v-model={this.settingData.search_logo}
            />
          </div>
          <input-checkbox
            title="毛玻璃效果"
            tiptext={true}
            status={this.settingData.blur_style}
            onClickevent={() => this.setBlurBackgroundStatus()}
          ></input-checkbox>
          <input-checkbox
            title="一言"
            tiptext={false}
            status={this.settingData.hitokoto}
            onClickevent={() => this.setHitokotoStatus()}
          ></input-checkbox>
          {/* 版权信息 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>作者信息</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">依然没什么用</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.settingData.copyright.author}
              v-model={this.settingData.copyright.author}
            />
            <input
              type="text"
              name="setting"
              value={this.settingData.copyright.website}
              v-model={this.settingData.copyright.website}
            />
          </div>
          {/* 网站开始时间 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>开始时间</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">依然没什么用</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.settingData.start_date}
              v-model={this.settingData.start_date}
            />
          </div>
          <div class="admin__submit">
            <m-button onClickevent={() => this.handleSave()}>保存</m-button>
            {this.statusSuccess ? <p>保存成功</p> : <p></p>}
          </div>
        </div>
      </div>
    );
  }
}
