/**
*
* Catergory: Function 
* Usage: Curry and bind function
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

function curry (fn) {
   var outterArgs = Array.prototype.slice.call(arguments, 1);
   return function () {
      var innerArgs = Array.prototype.slice.call(arguments),
          finalArgs = outterArgs.concat(innerArgs);
      fn.apply(null, finalArgs);
   }
}

// only bind context
function bind (fn, context) {
   return function () {
      fn.apply(context, arguments);
   }
}

// bind context and curry function, same as HTML5 bind function
function bind (fn, context) {
   var outterArgs = Array.prototype.slice.call(arguments, 2);
   return function () {
      var innerArgs = Array.prototype.call(arguments),
          finalArgs = outterArgs.concat(innerArgs);
      fn.apply(context, finalArgs);
   }
}
