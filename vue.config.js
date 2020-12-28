/*
 * @Author: Miya
 * @Date: 2020-06-18 18:17:09
 * @LastEditTime: 2020-09-30 18:06:33
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: \Single-Search-Front\vue.config.js
 */
module.exports = {
  // 打包输出目录
  publicPath: './',
  // 构建输出目录
  outputDir: 'dist',
  // 静态资源目录
  assetsDir: 'static',
  // CSS配置
  // 查阅： https://cli.vuejs.org/zh/guide/css.html#%E5%BC%95%E7%94%A8%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90
  css: {
    // 提取至单独的CSS文件
    extract: true
  },
  configureWebpack: {
    resolve: {
      // alias: {
      //   // 别名
      //   vue$: "vue/dist/vue.esm.js",
      // }
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx']
    }
  },
  // 代理服务器配置
  devServer: {
    proxy: {
      '/api': {
        // site: http://suggestqueries.google.com/complete/search?output=toolbar&hl=zh&q=前端
        target: 'http://api.dressweb.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
