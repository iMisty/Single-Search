/*
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-19 04:12:41
 */
import { Component, Vue } from 'vue-property-decorator';
import { router } from '@/config/router.config';
import { ADMIN_ICON } from '@/config/external.config';
import adminTop from '@/layout/admin/top';
// 导入SVG相关
import svgicon from '@/components/svgicon';
// 路由相关
import Router from '@/layout/admin/router';
// 外部CSS
import external from '@/components/external';
// 后台路由模型
import Routes from '@/model/routes';
import '@/style/admin.less';

@Component({
  // 组件注册
  components: {
    'admin-top': adminTop,
    svgicon,
    external,
    'admin-router': Router
  }
})
export default class Admin extends Vue {
  private router: Routes[] = router;

  private render() {
    return (
      <div class="admin">
        <external href={ADMIN_ICON}></external>
        {/* TopBar start */}
        <admin-top></admin-top>
        {/* TopBar end */}

        {/* LeftBar start */}
        <section class="admin__left">
          {this.router.map((item: Routes) => {
            return (
              <admin-router
                path={item.path}
                title={item.title}
                name={item.name}
              ></admin-router>
            );
          })}
        </section>
        {/* LeftBar end */}

        {/* Wrap start */}
        <section class="admin__wrap">
          {/* <transition name="fade"> */}
          <router-view></router-view>
          {/* </transition> */}
        </section>
        {/* Wrap end*/}
      </div>
    );
  }
}
