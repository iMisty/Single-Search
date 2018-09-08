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
/**
 * 表世界文字
 * title: 显示在顶部标题栏中的标题
 * primanyHeader: 页面内主标题
 * secondHeader: 页面内副标题
 * links: 链接按钮
 * link: 链接
 * icon: 图标,由 font-awesome 驱动
 * value: 按钮文字
 * blank: 是否在新窗口打开(V2.0为默认全部新选项卡/新窗口打开,此选项为摆设)
 */
var exteriorWorld = {
    title: 'Miya Neko House',
    primanyHeader: 'Miya Neko House',
    secondHeader: 'Moeist',
    links: [
        {
            link: 'https://miya.moe',
            icon: 'fa-home',
            value: 'Blog',
            blank: true
        },
        {
            link: 'https://github.com/jingyi21',
            icon: 'fa-github',
            value: 'GitHub',
            blank: true
        },
        {
            link: 'https://twitter.com/KannadukiShizuE',
            icon: 'fa-twitter',
            value: 'Twitter',
            blank: true
        },
        {
            icon: 'fa-plane',
            value: 'Deep Dark Extra',
            blank: false
        }
    ]
};
/**
 * 里世界文字
 * title: 显示在顶部标题栏中的标题
 * primanyHeader: 页面内主标题
 * secondHeader: 页面内副标题
 * links: 链接按钮
 * link: 链接
 * icon: 图标,由 font-awesome 驱动
 * value: 按钮文字
 * blank: 是否在新窗口打开(V2.0为默认全部新选项卡/新窗口打开,此选项为摆设)
 */
var behideWorld = {
    title: 'Magic House',
    primanyHeader: '里世界魔法屋',
    secondHeader: ['进来魔法屋,就得完全听我的指示','我选出符合条件的人','你来决定他们的命运','嘿,轮到你了'],
    links: [
        {
            link: 'https://blog.shizu17.pw',
            icon: 'fa-home',
            value: '裏・Blog',
            blank: true
        },
        {
            link: 'https://blog.shizu17.pw/?p=5',
            icon: 'fa-paper-plane',
            value: 'ShadowSocksRR',
            blank: true
        },
        {
            link: 'https://ws3.sinaimg.cn/large/0065BpO8gy1fuwmt11x8gj30dq0af3za.jpg',
            icon: 'fa-star',
            value: '魔法屋',
            blank: true
        },
        {
            icon: 'fa-plane',
            value: 'Back World',
            blank: false
        }
    ]
}


export { background,exteriorWorld,behideWorld }