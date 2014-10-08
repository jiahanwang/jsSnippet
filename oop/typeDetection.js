/**
*
* Catergory: OOP 
* Usage: Detect built-in objects
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

function isFunction (value) {
   return Object.prototype.toString.call(value) == "[object Function]";
}

function isRegExp (value) {
   return Object.prototype.toString.call(value) == "[object RegExp]";
}

function isArray (value) {
   return Object.prototype.toString.call(value) == "[object Array]";
}

function isNativeJSON (value) {
   return window.JSON && Object.prototype.toString.call(value) == "[object JSON]";
}

/*
 * Keep in mind that it’s possible to assign Object.prototype.toString() to a
 * different value. The technique discussed in this section assumes that 
 * Object.prototype.toString() is the native version and has not been overwritten by a developer.
 *
*/
