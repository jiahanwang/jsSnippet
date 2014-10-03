/**
*
* Catergory: DOM 
* Usage:  Cross-browser Event handler
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/
var EventUtil = {
   
   addHandler : function (element, type, handler) {
      if(element.addEventListener){
         element.addEventListner(type, handler, false);
      }else if(element.attachEvent){
         element.attachEvent('on' + type, handler);
      }else{
         element['on' + type] = handler;
      }
   },

   removeHandler : function (element, type, handler){
      if(element.removeEventListener){
         element.removeEventListener(type, handler, false);
      }else if(element.detachEvent){
         element.detachEvent('on' + type, handler);
      }else {
          element['on' + type] = null;
      }
   },
   
   // for all
   getEvent : function (event) {
      return event ? event : window.event;
   }, 

   getTarget : function (event) {
      return event.target ? event.target : event.srcElement;
   },

   preventDefault : function (event) {
      if(event.preventDefault){
         event.preventDefault();
      }else{
         // for IE
         event.returnValue = false;
      }
   },
   
   stopPropagation : function (event) {
      if(event.stopPropagation){
         event.stopPropagation;
      }else{
         // for IE
         event.cancelBubble = true;
      }
   },
   
   // for mouse events
   getPageX : function (event) {
      return event.pageX ?
             event.pageX :
             event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
   },
   
   // for mouse events
   getPageY : function (event) {
      return event.pageY ?
             event.pageY :
             event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
   },

   // for mouseleave, mouseenter, mouseover, mouseout
   getRelatedTarget : function (event) {
      if (event.relatedTarget) {
         return event.relatedTarget;
      // for IE
      } else if(event.toElement) {
         return event.toElement;
      } else if(event.fromElement) {
         return event.fromElement; 
      } else {
         return null;
      }
   },
   
   // for mouse events
   getButton : function (event) {
      if (document.implementation.hasFeature('MouseEvents', '2.0')) {
         return event.button;
      } else {
         // for IE
         switch (event.button) {
            case 0: 
            case 1:
            case 3:
            case 5:
            case 7:
               return 0;
            case 2:
            case 6:
               return 2;
            case 4:
               return 1;
         }
      }
   },

   // for mousewheel
   getWheelDelta : function (event) {
      if (event.wheelDelta) {
         return (client.engine.opera && client.engine.opera < 9.5 ? 
                -event.wheelDelta : event.wheelDelta);
      } else {
         return -event.detail * 40;
      }
   },

   // for keypress only, not keyup or keydown
   getChar : function (event) {
      var char;
      if (event.which == null) { 
         char= String.fromCharCode(event.keyCode);  // old IE 
      }
      else if (event.which != 0 && event.charCode != 0) {  
         char= String.fromCharCode(event.which); // All others else 
      }
      else {
         char = null; // special key
      }
      return char;
   },

}

