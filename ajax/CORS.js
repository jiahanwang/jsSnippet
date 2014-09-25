
/*
 * Catergory: Ajax
 * Usage: show CORS request in different browsers 
 * Source: Professional JavaScript for Web Developer
 *         JavaScript - the Definite Book
 */

function creatCorsRequest (method, url, callback) {
   var request = createXHR();
   if('withCredentials' in request){
      /* for other, just use XHR
      * 
      *  Custom headers cannot be set using setRequestHeader().
      *  Cookies are neither sent nor received.
      *  The getAllResponseHeaders() method always returns an empty string.
      *
      */
      request.onload = function (){
         callback(request.responseText);
      };
      request.open(method, url, true);
   
   }else if (typeof XDomainRequest !== 'undefined'){
       /* for IE8 +
       *
       *  Cookies are neither sent with requests nor received with responses.
       *  There is no access to set request headers other than Content-Type.
       *  There is no access to response headers.
       *  Only GET and POST requests are supported.
       *
       */
      request = new XDomainRequest();
      request.onload = function (){
         callback(request.responseText);
      };
      request.open(method, url);
   
   }else {
      request = null;
   }

   return request;
}
