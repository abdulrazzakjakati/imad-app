//counter code
var counter=0;
var button = document.getElementById('counter');
button.onclick = function() {
    //make a request to counter endpoint
    var request = new XMLHttpRequest();
    //Capture the responce & store it in variable.  
    request.onreadystatechange = function () {
	    if(request.readyState === XMLHttpRequest.DONE){
		    // Take some action
	    	if(request.status === 200){
		    	var counter = request.responseText;
		    	var span = document.getElementById('count');
			    span.innerHTML = counter.toString();
		    }
	    }
	
    };
	
	//Make a request
	request.open('GET','http://abdulrazzakjakati.imad.hasura-app.io/counter',true);
    request.send(null);
};

//Submit name
var 
button.onclick = function() {
    //make a request to counter endpoint
    var request = new XMLHttpRequest();
    //Capture the responce & store it in variable.  
    request.onreadystatechange = function () {
	    if(request.readyState === XMLHttpRequest.DONE){
		    // Take some action
	    	if(request.status === 200){
		    	var counter = request.responseText;
		    	var span = document.getElementById('count');
			    span.innerHTML = counter.toString();
		    }
	    }
	
    };
	
	//Make a request
	request.open('GET','http://abdulrazzakjakati.imad.hasura-app.io/counter',true);
    request.send(null);
};
