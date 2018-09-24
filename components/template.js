import $ from 'jquery';
import { getHeader,getWrap } from '../options';

function setTemplate(){
    $('title').text(getHeader.title);
    const setPrimaryTitle = `<h1 class="primary-title">${getWrap.primanyTitle}</h1>`;
    const setSecendTitle = `<h2 class="secend-title">${getWrap.secendTitle}</h2>`;
    const setLinks = `<ul class="flex"></ul>`;

    $('div.wrap').append(setPrimaryTitle,setSecendTitle,setLinks);

    for(let i = 0;i < getWrap.linksLength;i++){
        $('ul').append(`<li><a href="${getWrap.links[i].link}" target="_blank"><span class="${getWrap.links[i].icon}"></span><span>${getWrap.links[i].value}</span></a>`);
    }
}

export { setTemplate };