/**
*
* Catergory: Peformance
* Usage:  Dymanically load style sheet
* Source: High Performance JavaScript - Nicholas C.Zakas
*
**/

function loadStyle (url, callback){
   var link = document.createElement('link');
   link.rel = 'stylesheet';
   link.type = 'text/css';
   // for IE
   if(link.readyState){
      if(link.readyState == 'loaded' || link.readyState == "complete"){
      link.readyState = null;
      callback();
      }
   
   }else{
      // for normal broswers
      link.onload = function () {
         callback();
      }
   }
   link.href = url;
   document.getElementsByTagName('head')[0].appendChild(link);

}

function loadStringStyle (code) {
   var style = document.createElement('style');
   style.type = 'text/css';
   try{
      // for normal broswers
      style.appendChild(document.createTextNode(code));
   }catch(e){
      // for IE
      style.styleSheet.cssText = code;
   }
   document.getElementsByTagName('head')[0].appendChild(style);
}

