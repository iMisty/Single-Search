/*
 * @Author: Miya
 * @Date: 2021-03-29 17:50:01
 * @LastEditTime: 2021-03-29 17:57:24
 * @LastEditors: Miya
 * @Description: Copyright
 * @FilePath: \Single-Search-Front\src\components\HomeCopyright.tsx
 * @Version: 2.0
 */
import { defineComponent, onMounted, reactive } from 'vue';

const data = reactive({
  year: 2019,
});

const HomeCopyright = defineComponent({
  props: ['startdate', 'author', 'website'],
  computed: {
    startDateYear() {
      const years = this.$props.startdate || '2005-05-04';
      const year: Number = years.slice(0, 4);
      return year;
    },
  },
  setup() {
    onMounted: {
      const Dates = new Date();
      const years = Dates.getFullYear();
      data.year = years;
    }
    data;
    return { data };
  },

  render() {
    return (
      <div class="copyright">
        <p class="copyright-text">
          © <span>{this.startDateYear}</span>-<span>{data.year}</span> by{' '}
          <a href={this.website}>{this.author}</a> . All rights reserved.
        </p>
      </div>
    );
  },
});

export default HomeCopyright;
