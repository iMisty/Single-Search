 $(document).ready(function(){
     changeBG();
     $('a#dde').click(function(){
        $('#deep-dark-world').fadeIn();
        goToDeepWorld();
     });
     $('a#bw').click(function(){
        backWorld();
     })
     
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

function goToDeepWorld(){
    $('#normal-world').addClass('hide');
    $('#deep-dark-world').removeClass('hide');
    $('#bw').removeClass('hide')
            .addClass('active');
    $('body').css('background-color','rgba(0,0,0,1)');
}

function backWorld(){
    $('#deep-dark-world').addClass('hide');
    $('#normal-world').removeClass('hide');
    $('#bw').removeClass('active')
            .addClass('hide');
    $('#dde').removeClass('hide')
             .addClass('active');
    $('body').css('background-color','transparent');
}