/*
 * @Author: Miya
 * @Date: 2020-08-23 21:38:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 18:33:31
 * @Description: 首页右侧边栏用于显示用户离线时
 * @FilePath: \Single-Search\src\components\Home\offline.tsx
*/
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Mermaid/button';
@Component({
  components: {
    'm-button': Button,
  },
})
export default class Offline extends Vue {
  private femaleAvatar: object = require('@/assets/female.svg');
  // 控制点击后进入登录页面
  private handleLogin(): void {
    this.$router.push({ path: 'login' });
  }

  private render() {
    return (
      <div class="setting__wrap setting__logoff">
        <article class="setting__logoff--avatar">
          <section class="setting--avatar setting--avatar--female">
            <img src={this.femaleAvatar} />
          </section>
        </article>
        <article class="setting__logoff--setting">
          <m-button class="setting__logoff--setting--button" onClickevent={this.handleLogin}>
            <p>Login</p>
          </m-button>
        </article>
      </div>
    );
  }
}
