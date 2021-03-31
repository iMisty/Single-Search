import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class LinkEmpty extends Vue {
  private render() {
    return (
      <section class="admin__link--list nodata">
        <div class="admin__link--nodata">
          <img src={require('@/assets/target_monochromatic.svg')}></img>
          <p class="admin__link--nodata--text">
            当前没有导航链接，不点下按钮添加一个？
          </p>
        </div>
      </section>
    );
  }
}
