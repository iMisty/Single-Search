/*
 * @Author: Miya
 * @Date: 2020-09-28 18:19:36
 * @LastEditTime: 2020-11-16 11:13:06
 * @LastEditors: Miya
 * @Description: 搜索接口方法
 * @FilePath: \Single-Search-API\src\controller\search.ts
 * @Version: 1.0
 */
import { resultBaiduData, resultBingData } from '../util/util';

class SearchController {
  private static baidu = 'https://suggestion.baidu.com/su?wd=';
  private static bing = 'https://api.bing.com/qsonhs.aspx';
  // private static google = 'http://suggestqueries.google.com/complete/search';

  public static async getSearchData(ctx: any) {
    const { s, wd } = ctx.query;
    let result;
    if (s === 'baidu') {
      result = await resultBaiduData(SearchController.baidu, wd);
    }
    if (s === 'google' || s === 'bing') {
      result = await resultBingData(SearchController.bing, wd);
    }

    return (ctx.body = {
      code: 200,
      data: result,
    });
  }
}

export { SearchController };
