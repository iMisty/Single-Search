/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-18 00:50:09
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 11:56:25
 * @Description: 外链图标使用的 CSS 组件引入
 * @FilePath: \Single-Search\src\components\externalcss.tsx
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class ExternalCSS extends Vue {
  // 外链 css 地址
  @Prop()
  private href?: string;

  @Prop()
  private src?: string;

  private mounted() {
    this.$nextTick(() => {
      const head = document.querySelector('head');
      if (head !== null) {
        head.appendChild(this.$el);
      }
    });
  }

  private render(createElement) {
    if (this.href) {
      return createElement('link', {
        attrs: {
          rel: 'stylesheet',
          href: this.href
        }
      });
    }
    if (this.src) {
      return createElement('script', {
        attrs: {
          type: 'text/javascript',
          src: this.src
        }
      });
    }
  }
}
