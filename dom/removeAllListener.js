

function removeAllListener (target) {

   if(target == null) return;

   var copy = target.cloneNode(true);

   target.parentNode.replaceChild(copy, target);

}
