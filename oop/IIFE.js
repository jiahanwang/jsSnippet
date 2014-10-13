/*
 * IIFE
 *    (function ( ) { ... } ( ) ); // Crockford recommends this 
 *    (function ( ) { ... } ) ( );  // But this one works just as well
 */

var person = (function (name) {
   
   var id = 1;

   function getId () {
      return id;
   }

   function setId (newId) {
      return id = newId;
   }

   return {
      name : name,
      getId : getId,
      setId : setId
   };

})("Mike");



console.log(person.name);
console.log(person.getId());
console.log(person.id);

