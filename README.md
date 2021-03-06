# Single-Search

## 目前状况

### 体验地址

最新版：(https://kagura.design) 服务器位于海外，中国大陆用户可能速度略慢。小机子，请手下留情

用户名：admin，密码：123456

以前的版本：在域名后添加 `/beta1` `/beta2` 等版本号

## 项目构成

- backend： 独立后端接口，可选

- front： 前端页面展示

- search-api： 为解决搜索词联想延迟而独立设置的微服务，可选


## 填坑进度

前端： 使用 Vue3 重构中

后端： 已完成



## 简介

受启发于[简单搜索](https://github.com/5iux/sou) 这个项目的灵感,因此打造一个属于自己的搜索用首页.用做自己的启动页面使用,也顺带参考了一下导航功能.此项目基于 ~~Vue2.6 + TypeScript 3.9~~ 

前端： 使用Vue3 + Vite 2.0 + TypeScript
后端： 使用Koa2 + MongoDB 


## 状况



## 如何部署

若只想做为首页,则无需部署,只要将站点设置为首页即可

若想修改导航内容等:

- 直接下载位于 `release` 内的 localStorage 版安装包

- 复制到服务器或虚拟空间或本地目录

- 点击右上角个人信息图标登录至后台（默认账户 admin,默认密码为 123456）

- 修改位于 `link` 选项卡下的链接，目前图标采用 `iconfont` 内图标


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

- [x] 暗黑模式

- [x] 背景支持

- [ ] 多搜索引擎设置

- [ ] 后台可自定义界面

- [x] 使用 Node 驱动

- [ ] PHP 版本制作

## 更新日志

### 20200927 beta3

- `Create` 增加搜索框右侧按钮

- `Update` 增加对Github及Steam的支持

- `Fix` 后台管理下拉菜单亮度模式显示错误

- `Fix` 新增搜索引擎后首页没有同步

### 20200925 beta2

- `Create` 夜间暗黑模式

- `Update` 搜索引擎选择为图标+文字

- `Fix` 登录页面无法通过回车登录

- `Fix` 设置页面更改适配模式不生效

- `Delete` 临时删除背景图片功能

## 其他

如您所见,这个项目从 4 月初就开始,原本是打算直接在简单搜索项目里进行二次开发的,甚至连目前版本的 Logo 都是简单搜索的早期版本使用 Logo ,后面在 5 月初做出了个半成品后推倒重来,技术栈也从 `Vue + JS` 改为了目前的 `Vue + TS` ,也打算是给自己练练手熟悉一下 TypeScript .

创意也参考了[简易搜索](https://github.com/zzd/Simple-Search-Page)的一部分创意.可惜原作者也许是因为各种原因而停止了开源并将开发重心转向了 v2 版本,因此只参考了其中一些效果,在此也对两位原作者表示感谢

## License

MIT
