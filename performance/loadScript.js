/**
*
* Catergory: Peformance
* Usage:  Dymanically load external javascript file
* Source: High Performance JavaScript - Nicholas C.Zakas
*
**/

function loadScript (url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	if(script.readyState){
		script.onreadystatechange = function () {
			if(script.readyState == "loaded" || script.readyState == "complete"){
				script.readyState = null;
				callback();	
			}
		}
	}
	else{
		script.onload = function () {
			callback();
		}	
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChind(script);
}

