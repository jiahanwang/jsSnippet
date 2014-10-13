function mixin (receiver, supplier) {
   
   if(Object.getOwnPropertyDescriptor) {
      Object.keys(supplier).forEach(function (property) {
         Object.defineProperty(receiver, property, Object.getOwnPropertyDescriptor(supplier, property));
      });
   } else {
      for (var property in supplier) {
         if(supplier.hasOwnProperty(property)){
            receiver[property] = supplier[property];
         }
      }
   };
   return receiver;
} 
