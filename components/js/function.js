import $ from 'jquery';
import { background,removeRibbon } from './options';
import { setTemplate } from './template';
import { hitokoto } from './hitokoto';
import { css } from '../css/style.css';

$(document).ready(() => {
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