/*
 * @Author: Miya
 * @Date: 2020-07-24 17:48:54
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-19 03:49:06
 * @Description: 登录页面
 * @FilePath: /Single-Search/src/views/Login.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import loginForm from '@/layout/login/form';
import '@/style/login.less';

@Component({
  components: {
    'login-form': loginForm
  }
})
export default class Login extends Vue {
  private render() {
    return (
      <div class="login">
        <login-form></login-form>
      </div>
    );
  }
}
