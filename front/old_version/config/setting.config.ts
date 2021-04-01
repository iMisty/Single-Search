/*
 * @Author: Miya
 * @Date: 2020-09-18 17:28:56
 * @LastEditTime: 2020-09-21 11:36:24
 * @LastEditors: Miya
 * @Description: 系统设置
 * @FilePath: \Single-Search-Front\src\config\setting.config.ts
 * @Version: 1.0
 */
export const settingInfo = {
  // 全局背景图片（建议使用外链）https://i.loli.net/2020/06/13/Tsa8uqY2gbjRndw.jpg
  background: '',
  // 搜索logo（768×144）
  search_logo: require('@/assets/logo.svg'),
  // 是否支持毛玻璃效果 => 暂时无效
  blur_style: false,
  // 是否显示一言
  hitokoto: false,
  // 底部版权信息
  copyright: {
    // 作者
    author: 'Miya',
    // 点击作者名进入页面
    website: 'https://github.com/imisty'
  },
  // 网站开始事件
  start_date: '2005-05-04'
};
