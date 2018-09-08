# Landing-Page
![npm v6.0.0](https://img.shields.io/badge/NPM-6.0.0-blue.svg) ![IE](https://img.shields.io/badge/IE-10.0%2B-ff69b4.svg) ![Chrome](https://img.shields.io/badge/Chrome-29%2B-brightgreen.svg) ![Android](https://img.shields.io/badge/Android-4.4%2B-brightgreen.svg) ![iOS](https://img.shields.io/badge/iOS-9.2%2B-brightgreen.svg)
## 项目说明
一个静态的可供做为导航页面使用的落地页

## 包含内容

1. 随机变换的背景(自带全网 CDN ,可自定义)
2. 主副标题(可自定义)
3. 可自定义的3个链接
4. 隐藏的"裏模式"

## 使用方法
1. Clone 这个项目或 Download ZIP 的方式下载压缩包
> 请确认计算机内已安装 `Node` 与 `npm` ,否则请使用 V1.0版本,并忽略2~4的步骤
2. 在命令行窗口中定位项目根目录,然后输入以下命令以安装所需要的模块
> npm install
3. 使用以下命令运行项目
> npm run start
4. 若自行修改,修改完毕时重复 `3` 的过程即可

## 如何上传到个人服务器或虚拟主机中
V2.0:复制`index.html`,`style.css`,`bundle.js`,`Chelsea.ttf`(可选)

V1.0:复制`index.html`,`style.css`,`main.js`,`Chelsea.ttf`(可选)

将文件粘贴到 `public_html` 或根目录中,即可使用 `yourname.site` 的方式进行访问

将文件粘贴到 `public_html` 或根目录下的二级目录中,即可使用 `yourname.site/你的二级目录` 或 `你的二级目录.yourname.site` 的方式进行访问

## 修改方法

### V2.0
所有可修改部分均位于 `option.js` 中 ~~不要问我为什么不是图形化界面~~

### 可修改部分
- 标题栏标题(表/里)
- 页面内主标题(表/里)
- 页面内副标题(表)
- 链接按钮(表/里)
**内置 Font-Awesome, 可直接使用**
- 隐藏可选的表里跳转按钮(表/里)

### V1.0
所有可修改部分均位于 `main.js` 的 `template` 中
### 可修改部分
- 标题栏标题(表/里)
- 页面内主标题(表/里)
- 页面内副标题(表)
- 链接按钮(表/里)
**内置 Font-Awesome, 可直接使用**
- 隐藏可选的表里跳转按钮(表/里)

## 版本差异
### v2.0
- 将修改文件放置到独立文件内
- 使用 npm 管理模块
- 需要编译
### v1.0
- 可直接运行版本
- 修改位于 `main.js` 中
