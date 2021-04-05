import { defineComponent, reactive } from 'vue';

const data = reactive({});

const Admin = defineComponent({
  setup(props, ctx) {
    data;
    return { data };
  },
  render() {
    return <div class="admin"></div>;
  },
});

export default Admin;
