
/*
 * Catergory: Ajax
 * Usage: cross domain request using jsonp  
 * Source:  JavaScript - the Definite Book
 */

/**
* Server should return 
*      callbackname(json_data);
*
**/

function getJSONP (url, callback){
   var cbnumber = 'cb' + getJSONP.count ++ ;
   var cbname = 'getJSONP.' + cbnumber;
   // edit the url
   if(url.indexOf('?') == -1){
      url = url + '?callback=' + cbname;
   }else{
      url = url + '&callback=' + cbname;
   }
   // create script element
   var script = document.createElement('script');
   script.src = url;
   // register callback
   getJSONP[cbnumber] = function (response) {
      try {
         callback(response);
      } finally {
         delete getJSONP[cbnumber];
         script.parentNode.removeElement(script);
      }
   }
   // trigger action
   document.body.appendChild(script);
}

getJSONP.count = 0;



