/*
 * @Author: Miya
 * @Date: 2020-09-18 16:17:54
 * @LastEditTime: 2020-09-18 17:52:31
 * @LastEditors: Miya
 * @Description: 导航链接地址
 * @FilePath: \Single-Search\src\config\link.config.ts
 * @Version: 1.0
 */
/**
 * 使用说明：
 * name: 显示标题文字
 * icon: 显示图标，目前暂时只支持iconfont
 * items: 该分类下的链接
 * |- icon: 显示图标，大小为16×16
 * |- link: 链接地址
 * |- text: 显示文字（目前暂时只支持一行，6个文字）
 */
export const navLink = [
  {
    name: '工具',
    icon: 'gongju',
    items: [
      {
        icon: 'quxian',
        link: 'https://palettegenerator.colorion.co/',
        text: 'Color Palette Generator'
      },
      {
        icon: 'quxian',
        link: 'https://cubic-bezier.com/',
        text: 'Cubic Bezier'
      },
      {
        icon: 'xiongmao',
        link: 'https://tinypng.com/',
        text: 'TinyPNG'
      },
      {
        icon: 'fanyi',
        link: 'https://fanyi.baidu.com',
        text: '百度翻译'
      }
    ]
  },
  {
    name: '开发',
    icon: 'kaifa',
    items: [
      {
        icon: 'vuejs',
        link: 'https://cn.vuejs.org',
        text: 'Vue.js'
      },
      {
        icon: 'angular',
        link: 'https://angular.io',
        text: 'Angular'
      },
      {
        icon: 'react',
        link: 'https://react.docschina.org/',
        text: 'React'
      },
      {
        icon: 'gitHub',
        link: 'https://www.github.com',
        text: 'GitHub'
      }
    ]
  },
  {
    name: '影视动画',
    icon: 'dianying',
    items: [
      {
        icon: 'youtube',
        link: 'https://www.youtube.com',
        text: 'Youtube'
      },
      {
        icon: 'bilibili',
        link: 'https://www.bilibili.com',
        text: 'Bilibili'
      },
      {
        icon: 'acfun',
        link: 'https://www.acfun.cn',
        text: 'ACFun'
      },
      {
        icon: 'youku',
        link: 'https://www.youku.com',
        text: 'Youku'
      }
    ]
  },
  {
    name: '设计视觉',
    icon: 'caijian',
    items: [
      {
        icon: 'quxian',
        link: 'https://palettegenerator.colorion.co/',
        text: 'Color Palette Generator'
      },
      {
        icon: 'quxian',
        link: 'https://cubic-bezier.com/',
        text: 'Cubic Bezier'
      },
      {
        icon: 'xiongmao',
        link: 'https://tinypng.com/',
        text: 'TinyPNG'
      },
      {
        icon: 'dribbble',
        link: 'https://www.dribbble.com',
        text: 'Dribbble'
      },
      {
        icon: 'pixiv',
        link: 'https://www.pixiv.net',
        text: 'Pixiv'
      }
    ]
  },
  {
    name: '邮箱',
    icon: 'xinfeng',
    items: [
      {
        icon: 'gmail',
        link: 'https://mail.google.com',
        text: 'GMail'
      },
      {
        icon: 'hotmail',
        link: 'https://www.hotmail.co.jp',
        text: 'Hotmail-JP'
      },
      {
        icon: 'youxiang',
        link: 'https://mail.qq.com',
        text: 'QQ邮箱'
      }
    ]
  }
];
