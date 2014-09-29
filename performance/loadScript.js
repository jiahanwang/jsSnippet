/**
*
* Catergory: Peformance
* Usage:  Dymanically load javascript 
* Source: High Performance JavaScript - Nicholas C.Zakas
*
**/

function loadScript (url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	//for IE
	if(script.readyState){
		script.onreadystatechange = function () {
			if(script.readyState == "loaded" || script.readyState == "complete"){
				script.readyState = null;
				callback();	
			}
		}
	}
	// for normal
	else{
		script.onload = function () {
			callback();
		}	
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

function loadStringScript (code){
   var script = document.createElement('script');
   script.type = 'text/javascript';
   try{
      // for normal
      script.appendChild(document.createTextNode(code));
   }catch(e){
      // for IE
      script.text = code;
   }
   document.body.appendChild(script);
}

