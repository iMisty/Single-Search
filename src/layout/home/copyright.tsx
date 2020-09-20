/*
 * @Author: Miya
 * @Date: 2020-05-26 16:04:26
 * @LastEditTime: 2020-09-16 23:51:30
 * @LastEditors: Miya
 * @Description: 版权信息
 * @FilePath: /Single-Search/src/layout/home/copyright.tsx
 */

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class Copyright extends Vue {
  // Data
  private year: number = 2019;

  // 开始时间
  @Prop({ default: '2005' })
  private startdate?: string;

  // 作者
  @Prop({ default: 'Miya' })
  private author?: string;

  // 网站
  @Prop({ default: 'https://github.com/imisty' })
  private website?: string;

  /**
   * @description: 获取时间
   * @param {type}
   * @return: void
   * @author: Miya
   */
  private getYear(): void {
    const Dates = new Date();
    const years = Dates.getFullYear();
    this.year = years;
  }

  // Mounted
  private mounted() {
    this.getYear();
  }

  private get startDateYear() {
    const year = this.startdate || '2005-05-04';
    const temp = year.slice(0, 4);
    return temp;
  }

  private render() {
    return (
      <div class="copyright">
        <p class="copyright-text">
          © <span>{this.startDateYear}</span>-<span>{this.year}</span> by{' '}
          <a href={this.website}>{this.author}</a> . All rights reserved.
        </p>
      </div>
    );
  }
}
