import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class SideCard extends Vue {
  private render() {
    return <div class={`mermaid__side-card`}>
      {this.$slots.default}
    </div>;
  }
}
