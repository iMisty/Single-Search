import { Vue, Component } from 'vue-property-decorator';
import User from '@/components/Admin/user';

@Component({
  components: {
    'admin-user': User
  }
})
export default class AdminTop extends Vue {
  private render() {
    return (
      <section class="admin__top">
        <admin-user></admin-user>
      </section>
    );
  }
}
