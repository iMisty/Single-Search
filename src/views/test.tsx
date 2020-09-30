import { getExtraData } from '@/utils/GetSearchExtra';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class Test extends Vue {
  private a: string[] = [];
  private keyword: string = '';
  private async aa() {
    const b = await getExtraData('baidu', this.keyword);
    console.log(b.data);
    this.a = b.data;
  }
  private render() {
    return (
      <div>

      </div>
    );
  }
}
