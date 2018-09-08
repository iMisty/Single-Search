$(document).ready(function(){
     changeBG();
     frontWorld(); 
 });
function changeBG(){
    const BG = ['https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi896lfbj31hc0u079s.jpg',
                'https://ww2.sinaimg.cn/large/0060lm7Tly1fjfivy5o6zj31hc0u0wli.jpg',
                'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfivzadbwj31kw0w0k4s.jpg',
                'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi88qcdpj31hc0u00xy.jpg',
                'https://ww2.sinaimg.cn/large/0060lm7Tly1fji5691db2j31hc0u0n5v.jpg',
                'https://ww4.sinaimg.cn/large/0060lm7Tly1fji5688e62j31hc0u0wjg.jpg',
                'https://ww4.sinaimg.cn/large/0060lm7Tly1fjfi87rzn0j31hc0u0djp.jpg',
                'https://ws3.sinaimg.cn/large/007giGeVly1fuvsdqd6duj31hc0u0aea.jpg',
                'https://ws2.sinaimg.cn/large/0065BpO8gy1fuhnokeop1j31hc0u0too.jpg',
                'https://ws4.sinaimg.cn/large/007giGeVly1fuvsgpyiplj31hc0u0adj.jpg'];
    const random = Math.ceil(Math.random() * BG.length - 1);
    const a = `url('${BG[random]}')`;
    $('html').css("background-image",a);
}

function frontWorld(){
    const template = `<div class="wrap flex" id="normal-world">
    <h1 class="primary-title">Miya Neko House</h1>
    <h2 class="secend-title">Moeist</h2>
        <ul class="flex"><li>
                <a href="https://miya.moe" target="_blank">
                    <span class="fa fa-home"></span>
                    <span>Blog</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/jingyi21" target="_blank">
                    <span class="fa fa-github"></span>
                    <span>GitHub</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/KannadukiShizuE" target="_blank">
                    <span class="fa fa-twitter"></span>
                    <span>Twitter</span>
                </a>
            </li>
        </ul>
        <li>
            <a href="#" class="active" id="dde">
                <span class="fa fa-plane"></span>
                <span>Deep Dark Extra</span>
            </a>
        </li>
    </div>`;
    $('#deep-dark-world').remove();
    $('body').css('background-color','transparent');
    $('#app').html(template);
    $('#normal-world').addClass('animated fadeIn');
    $('a#dde').click(function(){
        goToDeepWorld();
     });    
}

function goToDeepWorld(){
    const template = `<div class="wrap flex" id="deep-dark-world">
    <h2 class="primary-title">里世界魔法屋</h2>
    <h3>进来魔法屋,就得完全听我的指示</h3>
    <h3>我选出符合条件的人</h3>
    <h3>你来决定他们的命运</h3>
    <ul class="flex">
        <li>
            <a href="https://blog.shizu17.pw" target="_blank">
                <span class="fa fa-home"></span>
                <span>裏・Blog</span>
            </a>
        </li>
        <li>
            <a href="https://blog.shizu17.pw/index.php/archives/3.html" target="_blank">
                <span class="fa fa-paper-plane"></span>
                <span>ShadowSocksRR</span>
            </a>
        </li>
        <li>
            <a href="https://ws3.sinaimg.cn/large/0065BpO8gy1fuwmt11x8gj30dq0af3za.jpg" target="_blank">
                <span class="fa fa-star"></span>
                <span>魔法屋</span>
            </a>
        </li>
    </ul>
    <h3>嘿,轮到你了</h3>
    <li>
        <a href="#" id="bw">
            <span class="fa fa-plane"></span>
            <span>Back World</span>
        </a>
    </li>
</div>`;
    $('#normal-world').remove();
    $('#app').html(template);
    $('#deep-dark-world').addClass('animated fadeIn');
    $('a#bw').click(function(){
        frontWorld();
     })
}
