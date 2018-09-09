function hitokoto(){
    $('div.wrap').append('<p id="hitokoto">获取中...</p>');
    fetch('https://v1.hitokoto.cn')
    .then(function (res){
    return res.json();
    })
    .then(function (data) {
    var hitokoto = document.getElementById('hitokoto');
    hitokoto.innerText = data.hitokoto; 
    })
    .catch(function (err) {
    console.error(err);
    })
}

export { hitokoto }