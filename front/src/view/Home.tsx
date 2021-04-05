import { defineComponent, reactive } from 'vue';

const data = reactive({});

const Home = defineComponent({
  setup(props, ctx) {
    data;
    return { data };
  },
  render() {
    return <div class="home"></div>;
  },
});

export default Home;
