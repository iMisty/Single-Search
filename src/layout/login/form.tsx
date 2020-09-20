import { Component, Vue } from 'vue-property-decorator';
import mButton from '@/components/Mermaid/button';
import LoginInterface from '@/model/login';
import { ACCOUNT_DATA, TOKEN_DATA } from '@/config/dataname.config';

@Component({
  components: {
    'm-button': mButton
  }
})
export default class LoginForm extends Vue {
  // 用户输入数据
  private loginData: LoginInterface = {
    username: '',
    password: ''
  };

  // 错误信息
  private errMsg: string = '';

  // 提交登录状态
  private setLoginStatus() {
    this.errMsg = '';
    const getUserLoginData = localStorage.getItem(ACCOUNT_DATA);
    console.log(`是否已自定义账号密码：${getUserLoginData}`);
    const value = this.loginData;

    // 已设置新账号密码
    if (getUserLoginData !== null) {
      const data = JSON.parse(getUserLoginData);
      // 账号密码不正确
      if (
        value.username !== data.username &&
        value.password !== data.password
      ) {
        this.errMsg = '账号密码错误';
        return false;
      }
      // 账号密码正确时，写入localStorage与Vuex
      localStorage.setItem(TOKEN_DATA, 'test-token');
      const getLoginStatus = localStorage.getItem(TOKEN_DATA);
      this.$store.commit('set_token', getLoginStatus);
      this.$router.push({ path: '/admin' });
      console.log(`token: ${this.$store.state.token}`);
      return true;
    }

    const loginStatus = localStorage.getItem(TOKEN_DATA);

    // 账号密码不正确
    if (value.username !== 'admin' && value.password !== '123456') {
      console.log('账号密码不正确');
      this.errMsg = '账号密码不正确';
      return false;
    }

    // 已经是登录状态
    if (loginStatus !== null) {
      console.log('已经是登录状态');
      this.$store.commit('set_token', 'test-token');
      this.$router.push({ path: '/admin' });
      console.log(`token: ${this.$store.state.token}`);
      return true;
    }

    // 账号密码正确时，写入localStorage与Vuex
    localStorage.setItem(TOKEN_DATA, 'test-token');
    this.$store.commit('set_token', loginStatus);
    this.$router.push({ path: '/admin' });
    console.log(`token: ${this.$store.state.token}`);
    return true;
  }

  private loginSuccessed(path) {
    localStorage.setItem(TOKEN_DATA, 'test-token');
    const getLoginStatus = localStorage.getItem(TOKEN_DATA);
    this.$store.commit('set_token', getLoginStatus);
    this.$router.push({ path });
    console.log(`token: ${this.$store.state.token}`);
  }

  private render() {
    return (
      <div class="login__form">
        <header class="login__form--title">
          <p>Sign in with credentials</p>
        </header>
        <section class="login__form--input">
          <div class="login__form--input--item">
            <input
              class="login__form--input-username"
              type="text"
              placeholder="用户名"
              value={this.loginData.username}
              v-model={this.loginData.username}
            />
          </div>
          <div class="login__form--input--item">
            <input
              class="login__form--input-password"
              type="password"
              placeholder="密码"
              value={this.loginData.password}
              v-model={this.loginData.password}
            />
          </div>
        </section>
        <section class="login__form--button">
          <m-button onClickevent={this.setLoginStatus}>登录</m-button>
          {this.errMsg ? (
            <p>{this.errMsg}</p>
          ) : (
            <p style="visibility: hidden;">这里没错误信息，别看了</p>
          )}
        </section>
      </div>
    );
  }
}
