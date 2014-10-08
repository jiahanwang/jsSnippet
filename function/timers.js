/**
*
* Catergory: Function 
* Usage: Advanced Timers 
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

// Repeating Timer

setTimeout(function () {

   // processing
   
   setTimeout(arguments.callee, 100);

}, 100);

// It is common to use this to do animation
setTimeout(function () {
   var div = document.getElementById('myDiv'),
       left = parseInt(div.style.left) + 5;
   div.style.left = left + 'px';
   
   if(left < 200){
      setTimeout(arguments.callee, 50);
   }

}, 50);


//Yielding processes

function chuck (array, process, context) {

   setTimeout(function () {
      var item = array.shift();
      process.call(context,item);
      if(array.length > 0)
         setTimeout(arguments.callee, 50);
   }, 100);
}

// The importance of array chunking is that it splits the processing of multiple items into separate code on the execution queue.


// Throttle process

function throttle (method. context) {
   clearTimeout(method.tld);
   method.tld = setTimeout(function () {
      method.call(context);
   }, 100);
}
// Throttling should be used whenever there is code that should be executed only periodically,  
// but you cannot control the rate at which the execution is requested.

function resizeHandler = function () {
   var div = document.getElementById('myId');
   div.style.height = div.offsetWidth + 'px';
}

window.onresize = function () {
   throttle(resizeHandler);
};


/*
 * setTimeout returns an integer with the ID value of the timer that is set. 
 * Use this value with the clearTimeout() method to cancel the timer
 *
 * Code executed by setTimeout() is run in a separate execution context to the function from which it was called. 
 * As a consequence, the this keyword for the called function will be set to the window (or global) object
*/
