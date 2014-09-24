/*
 * Catergory: Ajax
 * Usage: cross-browser solution for creating XHR object
 * Source: Professional JavaScript for Web Developers - Nicholas C.Zakas
 */

function createXHR(){
  if(typeof XMLHttpRequest != 'undefined'){
   return new XMLHttpRequest();
  }else if(typeof ActiveXObject != 'undefined'){
     if(typeof arguments.calle.activeXString != 'string'){
      var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
          i,
          len,
          object;
      for(i = 0, len = versions.length; i < len; i++){
         try{
            object = new ActiveXObject(versions[i]);
            arguments.callee.activeXString = versions[i];
            return object
         }catch(e){
            //skip
         } 
      }
      return new ActiveXObject(arguments.callee.activeXString);
     }
  }else{
   throw new Error('No XHR is avaaible');
  }
}
