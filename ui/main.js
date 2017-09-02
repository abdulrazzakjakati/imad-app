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
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to counter endpoint
    var request = new XMLHttpRequest();
    //Capture the responce & store it in variable.  
    request.onreadystatechange = function () {
	    if(request.readyState === XMLHttpRequest.DONE){
		    // Take some action
	    	if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (i=0; i<names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
		    }
	    }
	
    };
	
	var nameInput = document.getElementById('name');
	var name = nameInput.value;
	//Make a request
	request.open('GET','http://abdulrazzakjakati.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};
