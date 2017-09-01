//counter code
var counter=0;
var button = document.getElementById('counter');
button.onclick = function() {
    //make a request to counter endpoint
    
    //Capture the responce & store it in variable.  
    
    //Render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
}