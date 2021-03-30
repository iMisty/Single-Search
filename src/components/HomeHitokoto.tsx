/*
 * @Author: Miya
 * @Date: 2021-03-29 15:47:58
 * @LastEditTime: 2021-03-29 15:50:03
 * @LastEditors: Miya
 * @Description: Hitokoto Component
 * @FilePath: \Single-Search-Front\src\components\HomeHitokoto.tsx
 * @Version: 2.0
 */
import { defineComponent } from 'vue';

const Hitokoto = defineComponent({
  props: {
    hito: {
      type: String,
      default: '加载中...',
    },
  },
  setup() {},

  render() {
    return <div class="hitokoto">{this.$props.hito}</div>;
  },
});

export default Hitokoto;
