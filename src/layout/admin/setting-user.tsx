/*
 * @Author: Miya
 * @Date: 2020-07-23 15:38:12
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-20 05:40:16
 * @Description: 设置页面用户设置部分
 * @FilePath: /Single-Search/src/layout/admin/setting-user.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import User from '@/model/user';
// Mermaid UI
import Button from '@/components/Mermaid/button';
import Switch from '@/components/Mermaid/switch';
import { USER_DATA } from '@/config/dataname.config';
@Component({
  components: {
    'm-button': Button,
    'm-switch': Switch
  }
})
export default class SettingUser extends Vue {
  // tips图标
  private tipsicon: object = require('@/assets/tips.svg');
  // 保存成功
  private statusSuccess: boolean = false;
  // 原始数据
  private userData: User = {
    name: 'Miya',
    sex: 'Female',
    avatar: '',
    introduce: '一个测试用账号',
    dark_style: false,
    default_search: 'bing'
  };

  // 获取数据
  private getUserData() {
    const getData = localStorage.getItem(USER_DATA);
    if (getData !== null) {
      this.userData = JSON.parse(getData);
    }
    // 头像设置
    if (!this.userData.avatar) {
      this.userData.avatar = require('@/assets/female.svg');
    }
  }

  // 修改是否选择暗色模式
  private changeDarkStyle() {
    this.userData.dark_style = !this.userData.dark_style;
    console.log(`是否选择暗色模式：${this.userData.dark_style}`);
  }

  // 保存修改
  private handleSave() {
    const data = this.userData;
    console.log(`新数据：${JSON.stringify(data)}`);
    this.statusSuccess = true;
    localStorage.setItem(USER_DATA, JSON.stringify(data));
  }

  private mounted() {
    this.getUserData();
  }

  private render() {
    return (
      // TODO: 拆分为组件
      <section class="content">
        <div class="admin__user">
          {/* 头像 */}
          <div class="admin__user--setting admin__user--avatar">
            <section class="admin__user--setting--title">
              <h5>头像</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">一个头像</div>
              </section>
            </section>
            <input
              type="url"
              name="avatar"
              value={this.userData.avatar}
              onBlur={() => (this.userData.avatar = this.userData.avatar)}
              v-model={this.userData.avatar}
            />
            <div class="admin__user--avatar--image">
              <img src={this.userData.avatar} />
            </div>
          </div>
          {/* 昵称 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>昵称</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">
                  其实目前暂时没用
                </div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.userData.name}
              v-model={this.userData.name}
            />
          </div>
          {/* 默认头像 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>默认头像</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">目前还是没用</div>
              </section>
            </section>
            <select
              class="admin__user--setting--select"
              v-model={this.userData.sex}
            >
              <option value="undefined">-- 就不告诉你 --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* 骚话 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>骚话</h5>
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
              value={this.userData.introduce}
              v-model={this.userData.introduce}
            />
          </div>
          {/* 默认搜索引擎 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>默认搜索引擎</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">选择默认引擎</div>
              </section>
            </section>
            <select
              class="admin__user--setting--select"
              value={this.userData.default_search}
              v-model={this.userData.default_search}
            >
              <option value="google">谷歌</option>
              <option value="bing">必应</option>
              <option value="baidu">百度</option>
            </select>
          </div>
          {/* 适配颜色模式 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>适配颜色模式</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">
                  暗色模式尚未完成所以这个没法选择
                </div>
              </section>
            </section>
            <section class="admin__user--setting--checkpoint">
              <section class="admin__user--setting--checkpoint--item">
                <m-switch
                  status={this.userData.dark_style}
                  disabled="false"
                  onClickevent={() => this.changeDarkStyle()}
                ></m-switch>
              </section>
            </section>
          </div>
          <div class="admin__submit">
            <m-button onClickevent={() => this.handleSave()}>保存</m-button>
            {this.statusSuccess ? <p>保存成功</p> : <p></p>}
          </div>
        </div>
      </section>
    );
  }
}
