/*
 * Catergory: Ajax
 * Usage: cross domain request using jsonp  
 * Source:  JavaScript - the Definite Book
 */

/*
 *
 * Low level
 *
 */
// All subsequent Ajax calls using any function will use the new settings, you can set up all the settings as in ajax
$.ajaxSetup({

});

// All calls this function
$.ajax({
   async: true,
   url : 'http://ww.example.com/ajax',
   // HTTP method
   type: 'GET',
   // data to append to url (GET) or HTTP body (POST)
   data: {
            name: 'jiahan',
            age:18 
         },
   // type of response
   dataType: 'text',
   // type of request
   contenType: 'application/x-www-form-urlencoded; charset=UTF-8' //default
   // in milliseconds
   timeout: 1000,
   // add a timestamp to URL if set to false
   cache: false,
   // whether jQuery should trigger ajax event
   global: true,
   //callbacks
   success: function(data, textStatus, jqXHR){
   
   },
   error: function (jqXHR, textStatus, error) {
   
   },
   complete: function (jqXHR, textStatus){
   
   }
});

/*
 *
 * Shorthand function 
 *
 */

$.load(url, data, success_callback);

$.get(url, data, success_callback, dataType);

$.post(url, data, success_callback, dataType);

$.getJSON(url, data, success_callback);

$.getScript(url, success_callback);

/*
 *
 * Helper function
 *
 */

$('form#id').serialize(); // encode a form

$('form#id').serializeArray(); //  return a JavaScript array of objects, ready to be encoded as a JSON string

$.param(object); // encode an object

/*
 *
 * jQuery Ajax Event
 *
 */

.ajaxStart();
.ajaxSend();
.ajaxStop();
.ajaxComplete();
.ajaxSuccess();
.ajaxError();

