# Single-Search

## 目前进度

前端: 85%

后台系统: 85%

后端: 50%

## 简介

受启发于[简单搜索](https://github.com/5iux/sou) 这个项目的灵感,因此打造一个属于自己的搜索用首页.用做自己的启动页面使用,也顺带参考了一下导航功能.此项目基于 Vue2.6 + TypeScript 3.8

## 状况

前端主要功能已实现

数据目前分为两个版本：

- 可直接部署使用单页版本，数据存储使用localStorage

- ~~直接部署在服务器版本，数据存储使用MongoDB~~ （未完成）

## 如何部署

若只想做为首页,则无需部署,只要将站点设置为首页即可

若想修改导航内容等:

- 直接下载位于 `release` 内的localStorage版安装包

- 复制到服务器或虚拟空间或本地目录

- 输入 `http://yoursite/login` 或点击右上角个人信息图标登录至后台（默认账户与密码已给出）

- 修改位于 `link` 选项卡下的链接，目前图标采用 `iconfont` 内图标

## 项目组成

所有内容均在 src 目录下

- assets: 存放静态资源如图片

- components: 存放各种组件

  - 根目录下： 共用组件

  - 首页用组件： Home

  - 后台用组件： Admin

  - Mermaid UI组件： Mermaid

- config: 存放配置文件

- layout: 存放页面模组框架文件

  - 首页展示： home

  - 后台展示： admin

  - 登录页： login

- model: 存放 typescript 类型模型

- router: 存放路由配置

- store: 存放 vuex 配置及初始数据

- style: 存放 less 文件 （待优化）

- util: 存放各种业务逻辑配置

- views: 存放展示用页面

## 使用框架及库

基础框架: Vue2.6 with TypeScript

CSS 格式化: Less

图标: iconfont

后台 UI 库: Mermaid Style Beta Version

后端框架: Koa

数据库: localStorage / MongoDB

## ~~功能~~ TODOs

### 咕咕咕咕咕咕咕咕咕咕

- [x] 响应式支持

- [ ] 暗黑模式

- [x] 背景支持

- [ ] 多搜索引擎设置

- [ ] 后台可自定义界面

- [x] 使用 Node 驱动

- [ ] PHP 版本制作

## 其他

如您所见,这个项目从 4 月初就开始,原本是打算直接在简单搜索项目里进行二次开发的,甚至连目前版本的 Logo 都是简单搜索的早期版本使用 Logo ,后面在 5 月初做出了个半成品后推倒重来,技术栈也从 `Vue + JS` 改为了目前的 `Vue + TS` ,也打算是给自己练练手熟悉一下 TypeScript .

创意也参考了[简易搜索](https://github.com/zzd/Simple-Search-Page)的一部分创意.可惜原作者也许是因为各种原因而停止了开源并将开发重心转向了 v2 版本,因此只参考了其中一些效果,在此也对两位原作者表示感谢

## License

MIT

Anti996 License
