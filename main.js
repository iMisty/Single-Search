import { background,exteriorWorld,behideWorld } from './options.js';

$(document).ready(function(){
     changeBG();
     frontWorld();
 });
 
function changeBG(){
    const random = Math.ceil(Math.random() * background.length - 1);
    const a = `url('${background[random]}')`;
    $('html').css("background-image",a);
}

function frontWorld(){
    const template = `<div class="wrap flex" id="normal-world"><h1 class="primary-title">${exteriorWorld.primanyHeader}</h1><h2 class="secend-title">${exteriorWorld.secondHeader}</h2><ul class="flex"><li><a href="${exteriorWorld.links[0].link}" target="_blank"><span class="fa ${exteriorWorld.links[0].icon}"></span><span>${exteriorWorld.links[0].value}</span></a></li><li><a href="${exteriorWorld.links[1].link}" target="_blank"><span class="fa ${exteriorWorld.links[1].icon}"></span><span>${exteriorWorld.links[1].value}</span></a></li><li><a href="${exteriorWorld.links[2].link}" target="_blank"><span class="fa ${exteriorWorld.links[2].icon}"></span><span>${exteriorWorld.links[2].value}</span></a></li></ul><li><a href="#" class="active" id="dde"><span class="fa ${exteriorWorld.links[3].icon}"></span><span>${exteriorWorld.links[3].value}</span></a></li></div>`;
    $('#deep-dark-world').remove();
    $('title').text(exteriorWorld.title);
    $('body').css('background-color','transparent');
    $('#app').html(template);
    $('#normal-world').addClass('animated fadeIn');
    $('a#dde').click(function(){
        goToDeepWorld();
     });    
}

function goToDeepWorld(){
    const template = `<div class="wrap flex" id="deep-dark-world"><h2 class="primary-title">${behideWorld.primanyHeader}</h2><h3>${behideWorld.secondHeader[0]}</h3><h3>${behideWorld.secondHeader[1]}</h3><h3>${behideWorld.secondHeader[2]}</h3><ul class="flex"><li><a href="${behideWorld.links[0].link}" target="_blank"><span class="fa ${behideWorld.links[0].icon}"></span><span>${behideWorld.links[0].value}</span></a></li><li><a href="${behideWorld.links[1].link}" target="_blank"><span class="fa ${behideWorld.links[1].icon}"></span><span>${behideWorld.links[1].value}</span></a></li><li><a href="${behideWorld.links[2].link}" target="_blank"><span class="fa ${behideWorld.links[2].icon}"></span><span>${behideWorld.links[2].value}</span></a></li></ul><h3>${behideWorld.secondHeader[3]}</h3><li><a href="#" id="bw"><span class="fa ${behideWorld.links[3].icon}"></span><span>${behideWorld.links[3].value}</span></a></li></div>`;
    $('#normal-world').remove();
    $('title').text(behideWorld.title);
    $('#app').html(template);
    $('#deep-dark-world').addClass('animated fadeIn');
    $('a#bw').click(function(){
        frontWorld();
     })
}
