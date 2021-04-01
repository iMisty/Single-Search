/*
 * @Author: Miya
 * @Date: 2020-08-05 22:53:12
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-20 04:07:23
 * @Description: Setting Page In Admin
 * @FilePath: /Single-Search/src/layout/admin/setting.tsx
 */

import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class SettingAdmin extends Vue {
  private render() {
    return (
      <div class="admin__settings">
        <section class="admin__settings--title">
          <router-link
            class="admin__settings--title--text"
            to="/admin/setting/user"
            tag="section"
          >
            <i class="admin__settings--icon iconfont icon-user"></i>
            <p>用户设置</p>
          </router-link>
          <router-link
            class="admin__settings--title--text"
            to="/admin/setting/system"
            tag="section"
          >
            <i class="admin__settings--icon iconfont icon-controller"></i>
            <p>系统设置</p>
          </router-link>
          <router-link
            class="admin__settings--title--text"
            to="/admin/setting/account"
            tag="section"
          >
            <i class="admin__settings--icon iconfont icon-lock"></i>
            <p>修改密码</p>
          </router-link>
        </section>
        <router-view></router-view>
      </div>
    );
  }
}
