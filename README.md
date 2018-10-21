# TY-Landing-Page
![npm v6.0.0](https://img.shields.io/badge/NPM-6.0.0-blue.svg) ![IE](https://img.shields.io/badge/IE-10%2B-ff69b4.svg) ![Chrome](https://img.shields.io/badge/Chrome-29%2B-brightgreen.svg) ![Android](https://img.shields.io/badge/Android-4.4%2B-brightgreen.svg) ![iOS](https://img.shields.io/badge/iOS-9.2%2B-brightgreen.svg)
## 项目说明
一个静态的可供做为导航页面使用的落地页

## Demo 地址
[Demo](https://Miya-Yukarin.github.io/LandingPage/)

## 包含内容

1. 随机变换的背景(自带全网 CDN ,可自定义)
2. 主副标题
3. 自定义链接
4. 自带一言

## 使用方法
1. Clone 这个项目或 Download ZIP 的方式下载压缩包
请确认计算机内已安装 `Node` 与 `npm` 
> git clone https://github.com/Miya-Yukarin/LandingPage.git
2. 在命令行窗口中定位项目根目录,然后输入以下命令以安装所需要的模块
> npm install
3. 使用以下命令运行项目
> npm start
4. 自带修改即时编译即时刷新浏览器功能

## 如何上传到个人服务器或虚拟主机中
共通:请确认已经编译项目

复制`index.html`,`main.js`,`Chelsea.ttf`(可选)

将文件粘贴到 `public_html` 或根目录中,即可使用 `yourname.site` 的方式进行访问

将文件粘贴到 `public_html` 或根目录下的二级目录中,即可使用 `yourname.site/你的二级目录` 或 `你的二级目录.yourname.site` 的方式进行访问

## 食用方法

所有可修改部分均位于 `components/js/option.js` 中 

### 可修改部分
- 标题栏标题
- 页面内主标题
- 页面内副标题
- 链接按钮

**内置 Font-Awesome, 可直接使用**

## 更新日志

### 1.2.0

- 整合本地 CSS ,并采取编译后压缩 JS 文件

### 1.1.1

- 更换 CSS 库链接 CDN(BootCDN → 七牛云)

### 1.1.0

- 增加一言

## 许可

MIT License