import { Vue, Component } from 'vue-property-decorator';
import userSetting from '@/components/Admin/user-setting';
import SettingMenu from '@/model/admin-user';
@Component({
  components: {
    'user-setting': userSetting
  }
})
export default class AdminUser extends Vue {
  // 头像设置
  private avatar: string =
    this.$store.state.user.avatar || require('@/assets/female.svg');

  // 移动菜单
  private settingMenu: SettingMenu[] = [
    { title: '去往首页', path: '/' },
    { title: '退出登录', path: '/', event: 'logout' }
  ];

  // 控制菜单开启
  private isSettingMenuActive: boolean = false;

  /**
   * @description: 控制用户菜单是否开启
   * @param {boolean} status
   * @return {boolean}
   */
  private handleSettingMenuStatus() {
    this.isSettingMenuActive = !this.isSettingMenuActive;
    return true;
  }
  private render() {
    return (
      <div class="admin__top--user">
        <section
          class="admin__top--user--avatar"
          onClick={this.handleSettingMenuStatus}
        >
          <img src={this.avatar}></img>
        </section>
        {this.isSettingMenuActive ? (
          <section class="admin__top--user--menu">
            {this.settingMenu.map((item: any) => {
              return (
                <user-setting
                  title={item.title}
                  path={item.path}
                  extraEvent={item.event}
                ></user-setting>
              );
            })}
          </section>
        ) : (
          ''
        )}
      </div>
    );
  }
}
