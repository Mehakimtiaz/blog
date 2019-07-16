fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	  var obj = JSON.parse(JSON.stringify(myJson));
	    
	     window.alert(JSON.stringify(myJson));
	     console.log(JSON.parse(JSON.stringify(myJson)));
		
		 
		var   x = "";
		for (var i = 0; i < obj.length; i++) {
      
		  var mdiv = document.createElement("div");   // Create a <button> element
          mdiv.innerHTML =obj[i].id+"=>"+ obj[i].title ;                   // Insert text
          document.body.appendChild(mdiv);
		  var mline=document.createElement("hr");
          document.body.appendChild(mline);
		 }
       // document.getElementById("jsondata").innerHTML = x;
		
	
  });