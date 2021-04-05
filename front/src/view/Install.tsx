import { defineComponent, reactive } from 'vue';

const data = reactive({});

const Install = defineComponent({
  setup(props, ctx) {
    data;
    return { data };
  },
  render() {
    return <div class="install"></div>;
  },
});

export default Install;