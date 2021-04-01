/*
 * @Author: Miya
 * @Date: 2020-06-08 00:41:53
 * @LastEditTime: 2021-03-29 11:51:37
 * @LastEditors: Miya
 * @Description: icon component
 * @FilePath: \Single-Search-Front\src\components\GlobalIcon.tsx
 * @Version: 2.0
 */
import { defineComponent, renderSlot } from 'vue';

const icon = defineComponent({
  emits: ['click'],
  setup(props, ctx) {
    // Emit: click event
    const handleClick = () => {
      return ctx.emit('click');
    };
    return { handleClick };
  },

  render() {
    return (
      <div class="home__icon" onClick={() => this.handleClick}>
        {renderSlot(this.$slots, 'default')}
      </div>
    );
  },
});

export default icon;
