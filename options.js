/* 更改背景 
* 更改背景须知:
* 1.默认的图片为1080P,请尽量使用标准横屏图片
* 2.修改时注意在每个图片链接前后都要有引号(单引号双引号无所谓)
* 3.每个链接采用逗号间隔(一定要注意)
* 4.最末尾的链接不需要加逗号
*/
var background = [
                'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi896lfbj31hc0u079s.jpg',
                'https://ww2.sinaimg.cn/large/0060lm7Tly1fjfivy5o6zj31hc0u0wli.jpg',
                'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfivzadbwj31kw0w0k4s.jpg',
                'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi88qcdpj31hc0u00xy.jpg',
                'https://ww2.sinaimg.cn/large/0060lm7Tly1fji5691db2j31hc0u0n5v.jpg',
                'https://ww4.sinaimg.cn/large/0060lm7Tly1fji5688e62j31hc0u0wjg.jpg',
                'https://ww4.sinaimg.cn/large/0060lm7Tly1fjfi87rzn0j31hc0u0djp.jpg',
                'https://ws3.sinaimg.cn/large/007giGeVly1fuvsdqd6duj31hc0u0aea.jpg',
                'https://ws2.sinaimg.cn/large/0065BpO8gy1fuhnokeop1j31hc0u0too.jpg',
                'https://ws4.sinaimg.cn/large/007giGeVly1fuvsgpyiplj31hc0u0adj.jpg'
            ];


var removeRibbon = {
    
    /* 若要删除右上角 fork 图标,请将 removeFork 的值改为 true */
    removeFork: false,

    /* 若要取消底端的一言功能,请将 removeHitokoto 的值改为 true */
    removeHitokoto: false

}


/**
 * 设置页面内容,请根据注释内容设置
 */

var getHeader = {
    
    /* 此处设置标题,将显示在顶部标题栏中 */
    title: 'TY-Landing Page Demo'

}
var getWrap = {

    /* 此处设置主标题 */
    primanyTitle: 'Landing Page',
    
    /* 此处设置副标题 */
    secendTitle: '点击以下链接开始',

    /* 你需要多少个链接,推荐3或4个 */
    linksLength: 3,

    /* 以下是链接,每一个大括号代表一个链接
     * icon: 欲显示的图标,默认为 font-awesome 样式,图标参考:http://fontawesome.dashgame.com/
     * link: 链接地址,请输入完整的 http 或 https 链接
     * value: 显示的名称
     */
    links: [{
        icon: 'fa fa-home',
        link: 'https://github.com/Jingyi21/LandingPage',
        value: 'GitHub'
    },{
        icon: 'fa fa-paper-plane',
        link: 'https://github.com/Jingyi21/LandingPage/blob/master/README.md',
        value: '使用说明'
    },{
        icon: 'fa fa-terminal',
        link: 'https://jingyi21.github.io/LandingPage/LandingPage%20v1.0/index.html',
        value: '另一个版本Demo'
    }]
}





















export { background,getHeader,getWrap,removeRibbon }