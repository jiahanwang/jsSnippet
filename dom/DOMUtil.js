/**
*
* Catergory: DOM 
* Usage:  Cross-browser Style handler
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

var DOMUtil = {

    getElementLeft : function (element) {
      var actualLeft = element.offsetLeft;
      var current = element.offsetParent;

      while(current != null) {
         actualLeft += current.offsetLeft;
         current = current.offsetParent;
      }

      return actualLeft;
    },

    getElementTop : function (element) {
      var actualTop = element.offsetTop;
      var current = element.offsetParent;

      while (current != null) {
         actualTop += current.offsetTop;
         current = current.offsetParent;
      }

      return actualTop;
    },

    getViewport : function () {
      if(document.compatMode == "BackCompat"){
         return {
            width : document.body.clientWidth,
            height : document.body.clientHeight
         };
      } else {
         return {
            width : document.documenElement.clientWidth,
            height : document.documentElement.clientHeight
         };
      }
    },

    getBoundingClientRect : function (element) {
      var scrollTop = document.documentElement.scrollTop;
      var scrollLeft = document.documentElement.scrollLeft;
      var offset;
      if(element.getBoudingClientRect){
         // offset for IE8
         var temp = document.createElement('div');
         temp.style.cssText = "position: absolute; top : 0px; left : 0px;";
         document.body.appendChild(temp);
         offset = -temp.getBoudingClientRect().top - scrollTop;
         document.body.removeChild(temp);
         temp = null;
         var rect = element.getBoundingClientRect();
         return {
            top : rect.top + offset,
            left : rect.left + offset,
            right : rect.right + offset,
            bottom : rect.bottom + offset
         };
      }else{
         var actualLeft = DOMUtil.getElementLeft(element);
         var actualTop = DOMUtil.getElementTop(element);
         return  {
            top : actualTop - scrollTop,
            left : actualLeft - scrollLeft,
            right : actualLeft - scrollLeft + element.offsetWith,
            bottom : actualTop - scrollLeft + element.offsetHeight
         }
      }
    }
}
