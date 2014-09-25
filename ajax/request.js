/*
 * Catergory: Ajax
 * Usage: get, post and assistance functions to encode data 
 * Source: Professional JavaScript for Web Developer
 *         JavaScript - the Definite Book
 */

function get (url, data, callback){
   var request = createXHR();
   request.onreadystatechange = function () {
      if(request.readyState == 4){
         var status = request.status;
         if(status >= 200 status < 300 || status == 304){
            // process the response according to MIME
            var type = request.getResponseHeader('Content-Type');
            if(type.indexOf('xml') !== -1)
               callback(request.responseXML);
            else
               callback(request.responseText);
      }
   }
   request.open('GET', url + '?' + encodeObjectData(data), true);
   request.send(null); // GET method must send null
}

function post (url, data, callback) {
   var request = createXHR();
   request.onreadystatechange = function () {
      if(request.readyState == 4){
        var status = request.status;
        if(status >= 200 && status < 300 || status == 304){
         var type = request.getResponseHeader('Content-Type');
         if(type.indexOf('xml') !== -1)
            callback(request.responseXML);
         else
            callback(request.revsponseText);
        }
      }
   }
   request.open('POST', url, true);
   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   request.send(encodeObjectData(data));
}


