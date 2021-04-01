# Single Search API

## 项目说明

- 配合[简单搜索项目](https://github.com/iMisty/Single-Search-Front) 搜索联想用 API 微服务，基于 Koa2

## 如何部署

1. git clone 本项目

2. `npm install` 或 `yarn` 安装依赖 ~~毕竟用了 TS~~

3. 根据想要的需求，分别部署

|- 若想在本地服务器部署，直接使用`npm watch` 或 `yarn watch`即可

|- 若需要部署于远程服务器或使用 PM2 守护进程的话：

    1. 使用 npm run build 或 yarn build 将项目打包为js文件

    2. 将dist内的3个js文件及根目录的 package.json 复制到服务器目录中

    3. PM2请事先全局安装koa2

    4. 项目目录定位到存储以上4个文件的目录处，入口文件选择app.js

    5. enjoy

## 使用方法

链接：`http://yoursite.name/search`

### 参数

- search： 搜索引擎，目前支持三个搜索引擎：baidu / bing / google

- keyword： 关键词，使用数组返回

### 示例

- Vue with TypeScript

```
// 承载数据数组
const data: string[] = [];

// 加载方法
private async getSearchData(search: string, keyword: string){
  const list = await getExtraData(search,keyword);
  this.data = list;
  console.log(this.data.data);
}

// 示例
this.getSearchData('baidu','google');
```
