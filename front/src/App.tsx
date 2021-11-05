/*
 * @Author: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditTime: 2021-09-19 19:50:15
 * @LastEditors: Miya
 * @Description: index
 * @FilePath: \backendg:\GitHub\Single-Search\front\src\App.tsx
 * @Version: 2.0
 */
import { defineComponent, reactive } from 'vue';
import './style/global/style.less';

const data = reactive({});

const App = defineComponent({
  components: {},
  setup() {
    data;
    return { data };
  },

  render() {
    return <div class="app">
      <router-view></router-view>
    </div>;
  },
});

export default App;
