console.log('Loaded!');

//change the text of inner html
var element=document.getElementById('main-text');
element.innerHTML='new value';

//Move the Image
var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight (){
    marginLeft = margenLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
    img.onclick = function(){
    var interval = setInterval(moveRight,100);
}