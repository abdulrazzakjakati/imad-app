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

//code for comment box

var submit = document.getElementById('submit2');
submit.onclick = function() {
    //make a request to counter endpoint
    var request = new XMLHttpRequest();
    //Capture the responce & store it in variable.  
    request.onreadystatechange = function () {
	    if(request.readyState === XMLHttpRequest.DONE){
		    // Take some action
	    	if(request.status === 200){
                var comments = request.responseText;
                comments = JSON.parse(comments);
                comments.reverse();
                var list = '';
                for (i = 0; i<comments.length; i++) {
                    list += '<li>' + commnents[i] + '</li>';
                }
                var ul = document.getElementById('commentlist');
                ul.innerHTML = list;
		    }
	    }
	
    };
	
	var nameInput = document.getElementById('uname');
	var name = nameInput.value;
	var commentInput = document.getElementById('comment');
	var comment = commentInput.value;
	//Make a request
	request.open('GET','http://abdulrazzakjakati.imad.hasura-app.io/submit-commt?name=' + name + '&comment=' + comment,true);
    request.send(null);
};

function loadcomments() {
    //make a request to counter endpoint
    var request = new XMLHttpRequest();
    //Capture the responce & store it in variable.  
    request.onreadystatechange = function () {
	    if(request.readyState === XMLHttpRequest.DONE){
		    // Take some action
	    	if(request.status === 200){
                var comments = request.responseText;
                comments = JSON.parse(comments);
                comments.reverse();
                var list = '';
                for (i = 0; i<comments.length; i++) {
                    list += '<li>' + comments[i] + '</li>';
                }
                list.reverse();
                var ul = document.getElementById('commentlist');
                ul.innerHTML = list;
		    }
	    }
	
    };
	
	//Make a request
	request.open('GET','http://abdulrazzakjakati.imad.hasura-app.io/submit-commt',true);
    request.send(null);
}
