 function getAction(){
 	var client=new XMLHttpRequest(); 
 	client.open("GET","/api/now/table/incident"); 
 	client.setRequestHeader('Accept','application/json');
 	client.onreadystatechange = function(){
 		if(this.readyState == this.DONE){
 			document.getElementById("response").innerHTML=this.status + this.response;
 		}};
 		client.send();
 }