/*
 * @Author: Miya
 * @Date: 2020-06-23 00:43:51
 * @LastEditTime: 2021-03-29 17:24:06
 * @LastEditors: Miya
 * @Description: Search Associate block
 * @FilePath: \Single-Search-Front\src\components\HomeSearchAssociate.tsx
 * @Version: 2.0
 */
import { defineComponent, reactive } from 'vue';

const data = reactive({});

const HomeSearchAssociate = defineComponent({
  props: ['extra'],
  setup() {
    data;
    return { data };
  },

  render() {
    return (
      <div class="associate">
        <ul class="associate-list">
          {this.extra?.map((item: string) => {
            return <li class="associate-item">{item}</li>;
          })}
        </ul>
      </div>
    );
  },
});

export default HomeSearchAssociate;
