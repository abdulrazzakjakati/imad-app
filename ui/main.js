console.log('Loaded!');

//change the text of inner html
var element=document.getElementById('main-text');
//element.innerHTML='new value';

//Move the Image
var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
    img.onclick = function(){
    var interval = setInterval(moveRight,50);
}

//counter code
var button = document.getElementById('counter');
button.onclick = function() {
    //make a request to counter endpoint
    
    //Capture the responce & store it in variable.  
    
    //Render the variable in correct span
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
}