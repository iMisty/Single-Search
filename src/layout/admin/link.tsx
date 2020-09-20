import { Component, Vue } from 'vue-property-decorator';
import { LINK_DATA } from '@/config/dataname.config';
import LinkEmpty from '@/components/Admin/link-empty';
import mButton from '@/components/Mermaid/button';

interface Link {
  icon: string;
  items: object[];
  name: string;
  titleIconColor: string;
}
@Component({
  components: {
    'm-button': mButton,
    'link-empty': LinkEmpty
  }
})
export default class AdminLink extends Vue {
  private deleteIcon: object = require('@/assets/delete.svg');
  private questionIcon: object = require('@/assets/tips.svg');

  private linkData: Link[] = [];

  /**
   * @description: 获取数据,取自localStorage
   * @param {object}
   * @return
   */
  private getLinkData() {
    const data: string | null = localStorage.getItem(LINK_DATA);
    if (data !== null) {
      this.linkData = JSON.parse(data);
    }
    return true;
  }

  /**
   * @description: 新建一组新链接
   * @param {object} e
   * @return {boolean}
   */
  private createNewItem(e: {
    target: { parentElement: { getAttribute: (arg0: string) => any } };
  }) {
    const index = e.target.parentElement.getAttribute('data-index');
    this.linkData[index].items.push({
      icon: '',
      link: '',
      text: ''
    });
    console.log(this.linkData[index].items);
    this.handleSave();
    return true;
  }

  /**
   * @description: 新建一个新分组
   * @param {type}
   * @return {type}
   */

  private createNewAssort() {
    const newData = {
      name: '',
      titleIconColor: '',
      icon: '',
      items: [
        {
          icon: '',
          link: '',
          text: ''
        }
      ]
    };
    this.linkData.push(newData);
    this.handleSave();
  }

  /**
   * @description: 保存数据
   * @param
   * @return {boolean}
   */
  private handleSave() {
    localStorage.setItem(LINK_DATA, JSON.stringify(this.linkData));
    return true;
  }

  /**
   * @description: 删除单行链接
   * @param {type} e
   * @return {type}
   */
  private handleDeleteItem(e: {
    target: { getAttribute: (arg0: string) => number };
  }) {
    const ids = e.target.getAttribute('data-id');
    const index = e.target.getAttribute('data-index');
    this.linkData[ids].items.splice(index, 1);
    this.handleSave();
    console.log(`对应数据：${JSON.stringify(this.linkData[ids].items[index])}`);
  }

  /**
   * @description: 删除整个分类
   * @param {type} e
   * @return {type}
   */
  private handleDeleteAssort(e: {
    target: { parentElement: { dataset: { index: number } } };
  }) {
    const index = e.target.parentElement.dataset.index;
    this.linkData.splice(index, 1);
    this.handleSave();
  }

  private mounted() {
    this.getLinkData();
  }

  private render() {
    return (
      <div class="admin__link">
        {this.linkData.length === 0 ? (
          <link-empty></link-empty>
        ) : (
          <section class="admin__link--list">
            {this.linkData.map((item: any, index: number) => {
              return (
                <table class="admin__link--table">
                  <tr class="admin__link--table--wrap">
                    <th class="admin__link--table--title">图标class</th>
                    <th class="admin__link--table--title">标题</th>
                    <th class="admin__link--table--title">标题颜色</th>
                    <th class="admin__link--table--setting">疑问</th>
                  </tr>
                  <tr class="admin__link--table--wrap">
                    <td class="admin__link--table--icon">
                      <input
                        value={item.icon}
                        v-model={item.icon}
                        placeholder="分类标题图标"
                        onBlur={() => this.handleSave()}
                      />
                    </td>
                    <td class="admin__link--table--link">
                      <input
                        value={item.name}
                        v-model={item.name}
                        placeholder="分类标题"
                        onBlur={() => this.handleSave()}
                      />
                    </td>
                    <td class="admin__link--table--text">
                      <input
                        value={item.titleIconColor}
                        v-model={item.titleIconColor}
                        placeholder="分类标题文字颜色"
                        onBlur={() => this.handleSave()}
                      />
                    </td>
                    <td class="admin__link--table--setting">
                      <div class="admin__link--table--setting-button">
                        <img src={this.questionIcon} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="admin__link--table--wrap">
                    <th class="admin__link--table--title">图标</th>
                    <th class="admin__link--table--title">链接</th>
                    <th class="admin__link--table--title">显示文字</th>
                    <th class="admin__link--table--title">操作</th>
                  </tr>

                  {item.items.map(
                    (
                      childItem: { icon: string; link: string; text: string },
                      childIndex: number
                    ) => {
                      return (
                        <tr
                          class="admin__link--table--wrap"
                          data-id={index}
                          data-index={childIndex}
                        >
                          <td class="admin__link--table--icon">
                            <input
                              value={childItem.icon}
                              v-model={childItem.icon}
                              placeholder="链接图标"
                              onBlur={() => this.handleSave()}
                            />
                          </td>
                          <td class="admin__link--table--link">
                            <input
                              value={childItem.link}
                              v-model={childItem.link}
                              placeholder="链接地址"
                              onBlur={() => this.handleSave()}
                            />
                          </td>
                          <td class="admin__link--table--text">
                            <input
                              value={childItem.text}
                              v-model={childItem.text}
                              placeholder="链接显示文字"
                              onBlur={() => this.handleSave()}
                            />
                          </td>
                          <td class="admin__link--table--setting">
                            <div
                              class="admin__link--table--setting-button"
                              onClick={this.handleDeleteItem}
                            >
                              <img
                                src={this.deleteIcon}
                                alt=""
                                data-id={index}
                                data-index={childIndex}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )}
                  <th class="admin__link--options" data-index={index}>
                    <m-button onClickevent={this.createNewItem}>
                      增加项
                    </m-button>
                    <m-button
                      color="danger"
                      onClickevent={this.handleDeleteAssort}
                    >
                      删除整项
                    </m-button>
                  </th>
                </table>
              );
            })}
          </section>
        )}
        <div class="admin__link--options on-footer">
          <m-button
            type="round"
            color="primary"
            size="regular"
            onClickevent={() => this.createNewAssort()}
          >
            增加新分类
          </m-button>
        </div>
      </div>
    );
  }
}
