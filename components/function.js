import { background,removeRibbon } from '../options';
import { setTemplate } from './template';
import { hitokoto } from './hitokoto';

$(document).ready(function(){
     changeBG();
     removeLoading();
     frontWorld();
 });
 
function changeBG(){
    const random = Math.ceil(Math.random() * background.length - 1);
    const a = `url('${background[random]}')`;
    $('html').css("background-image",a);
}

function removeLoading(){
    $('div#app').empty();
}

function frontWorld(){
    $('div#app').append('<div class="wrap"></div>')
    setTemplate();
    $('div.wrap').addClass('animated fadeIn');
    hitokoto();
}

if(removeRibbon.removeFork == true){
    $('body a').remove();
}
if(removeRibbon.removeHitokoto == true){
    $('#hitokoto').remove();
}

if(window.console){
    console.log('\n %c TY-Landing Page v1.0 %c by Kannazuki Miya |  https://miya.moe ','color:#dcf2f8;background:#23b7e5;padding:5px 0;','color:#eee;background:rgba(252,248,227,.3);padding:5px 0;')
}