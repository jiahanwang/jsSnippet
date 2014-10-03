/**
*
* Catergory: DOM 
* Usage:  Cross-browser Event handler
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

var EventSimulator = {
   
   simulateMouseEvent : function (target, properties) {
      if (!target) return;
      var defaults = {
            type : 'click',
            bubbles : true,
            cancelable : true,
            view : document.defaultView,
            detail : 0,
            screenX : 0,
            screenY : 0,
            clientX : 0,
            clientY : 0,
            ctrlKey : false,
            altKey : false,
            shiftKey : false,
            metaKey : false,
            button : 0,
            relatedTarget : null
      };
      jQuery.extend(defaults, properties);
      if (document.createEvent) {
         var event = document.createEvent('MouseEvents');
         event.initMouseEvent(
            defaults.type, 
            defaults.bubbles,
            defaults.cancelable,
            defaults.view,
            defaults.detail,
            defaults.screenX,
            defaults.screenY,
            defaults.clientX,
            defaults.clientY,
            defaults.ctrlKey,
            defaults.altKey,
            defaults.shiftKey,
            defaults.metaKey,
            defaults.button,
            defaults.relatedTarget
         );
         target.dispathEvent(event);
      } else {
         // for IE 8-
         _simlateIEEvent(target, defaults);
      }
   },

   simulateKeyboardEvent : function (target, properties) {
      if (!document.implementation.hasFeature('KeyboardEvents', '3.0') || !target) return;
      var defaults = {
            type : 'keydown', // DOM 3 ditch keypress event
            bubbles : true,
            cancelable : true,
            view : document.defaultView,
            detail : 0,
            key : 'a' // string
            location : 0 // integer for the area of keyboard
            modifiers : null // "Shift Ctrl"
            repeat : 0
      };
      jQuery.extend(defaults, properties);
      if (document.createEvent) {
         // Notice FF is different
         var event = document.createEvent('KeyboardEvent'); // DOM 3 : KeyboardEvent is singlar
         event.initKeyboardEvent(
            defaults.type, 
            defaults.bubbles,
            defaults.cancelable,
            defaults.view,
            defaults.detail,
            defaults.key,
            defaults.location,
            defaults.modifers,
            defaults.repeat,
         );
         target.dispathEvent(event);
      } else {
         // for IE 8-
         _simlateIEEvent(target, defaults);
      }
   },

   simulateCustomEvent : function (target, properties) {
      if (!document.implementation.hasFeature('CustomEvents', '3.0') || !target) return;
      var defaults = {
            type : 'customEvent', 
            bubbles : true,
            cancelable : true,
            detail : 0,
      };
      jQuery.extend(defaults, properties);
      if (document.createEvent) {
         // Notice FF is different
         var event = document.createEvent('CustomEvent'); // DOM 3 : so CustomEvent is singlar 
         event.initCustomEvent(
            defaults.type, 
            defaults.bubbles,
            defaults.cancelable,
            defaults.detail,
         );
         target.dispathEvent(event);
      } else {
         // for IE 8-
         _simlateIEEvent(target, defaults);
      }
   }

   // inner function, for IE 8-
   _simlateIEEvent : function (target, properties) {
         var event = document.createEventObject();
         jQuery.extend(event, properpoties);
         target.fireEvent('on' + event.type, event);
   }

}




