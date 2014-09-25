/*
 * Catergory: Ajax
 * Usage: urlencode Object or Form data
 * Source: Professional JavaScript for Web Developer
 *         JavaScript - the Definite Book
 */

// encode an object 
function encodeObjectData (data) {
   if(typeof data !== 'object') return null;
   var pairs = [];
   for(var property in data){
      if(!data.hasOwnProperty(property)) continue;
      if(typeof property === 'function') continue;
      pairs.push(encodeURIComponent(property.replace(' ', '+')) + '=' +  encodeURIComponent(data[property].replace(' ', '+')));
   }
   return pairs.join('&');
}


function encodeFormData(form){
   var pairs = [],
       field = null,
       i, 
       len,
       optLen,
       option,
       optValue;
   for (i = 0; len = form.elements.length; i < len; i++){
      field = form.elements[i];
      switch(field.type){
         case 'select-one':
         case 'select-multiple':
            if(field.name.length){
               for(j = 0, optLen = field.options.length; j < optLen; j++>){
                   option = field.options[j];
                   if(option.selected){
                      optValue = "";
                      if(option.hasAttribute)
                         optValue = (option.hasAttribute('value') ? option.value : option.test;
                      else
                         optValue = (option.attribute['value'].specified ? option.value : option.text)
                      pairs.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(optValue));
                   }
               }
            } 
            break;
         case undefined:
         case 'field':
         case 'submit':
         case 'reset':
         case 'button': break;
         case 'radio':
         case 'checkoutbox':
            if(!field.checked){
               break;
            }
         default: 
            if(field.name.length){
               parts.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value));
            }
      }
   }
   return pairs.join('&');
}


