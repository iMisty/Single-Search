/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-20 00:31:22
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-20 05:39:46
 * @Description: 设置页面用户账号密码部分
 * @FilePath: /Single-Search/src/layout/admin/setting-account.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import { ACCOUNT_DATA } from '@/config/dataname.config';
import Button from '@/components/Mermaid/button';
@Component({
  components: {
    'm-button': Button
  }
})
export default class SettingAccount extends Vue {
  // tips图标
  private tipsicon: object = require('@/assets/tips.svg');
  // 用户信息
  private account = {
    username: '',
    password: ''
  };
  // 保存成功
  private statusSuccess: boolean = false;
  // 保存修改
  private handleSave() {
    const data = JSON.stringify(this.account);
    localStorage.setItem(ACCOUNT_DATA, data);
    this.statusSuccess = true;
    return true;
  }
  // 获取用户名数据
  private getAccountData() {
    const data = localStorage.getItem(ACCOUNT_DATA);
    if (data !== null) {
      this.account = JSON.parse(data);
    }
  }
  private mounted() {
    this.getAccountData();
  }
  private render() {
    return (
      <section class="content">
        <div class="admin__setting--account">
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>用户名</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">
                  登录后台的用户名
                </div>
              </section>
            </section>
            <input type="text" name="setting" v-model={this.account.username} />
          </div>
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>登录密码</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">
                  登录后台用密码
                </div>
              </section>
            </section>
            <input
              type="password"
              name="setting"
              v-model={this.account.password}
            />
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
