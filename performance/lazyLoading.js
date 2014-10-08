/**
*
* Catergory: Peformance
* Usage: Lazy loading functions
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

// Take XHR.js as an example

function createXHR () {
   if (typeof XMLHttpRequest != 'undefined') {
      createXHR = function () {
         return new XMLHttpRequest;
      };
   } else if (typeof ActiveXObject != 'undefined') {
         createXHR = function () {
            if(typeof arguments.callee.activeString != 'string') {
               var versions = [“MSXML2.XMLHttp.6.0”, “MSXML2.XMLHttp.3.0”, “MSXML2.XMLHttp”],
                   i,
                   len;
               for (i = 0, len = versions.length; i < len; i++){
                  try{
                     new ActiveXObject(versions[i]);
                     arguments.callee.activeString = versions[i];
                     break;
                  } catch (ex) {
                        // skip
                  }
               }
               return newActiveXObject(versions[i]);
            }
         };
   } else {
      createXHR = function () {
         throw new Exception ('No XHR object is avaible.');
      };
   } 
}

// another way
var xhr = (function () {
   if (typeof XMLHttpRequest != 'undefined') {
      return  function () {
         return new XMLHttpRequest;
      };
   } else if (typeof ActiveXObject != 'undefined') {
         return function () {
            if(typeof arguments.callee.activeString != 'string') {
               var versions = [“MSXML2.XMLHttp.6.0”, “MSXML2.XMLHttp.3.0”, “MSXML2.XMLHttp”],
                   i,
                   len;
               for (i = 0, len = versions.length; i < len; i++){
                  try{
                     new ActiveXObject(versions[i]);
                     arguments.callee.activeString = versions[i];
                     break;
                  } catch (ex) {
                        // skip
                  }
               }
               return newActiveXObject(versions[i]);
            }
         };
   } else {
      return function () {
         throw new Exception ('No XHR object is avaible.');
      };
   } 
})();
