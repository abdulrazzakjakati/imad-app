console.log('Loaded!');

//change the text of inner html
var element=document.getElementById('main-text');
element.innerHTML='new value';

//Move the Image
var img = document.getElementById('madi');
    img.onclick = function(){
    img.style.marginLeft='100px';
}