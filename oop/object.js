/**
*
* Catergory: OOP 
* Usage: Object 
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

var person1 = {
   
   // Data property
   _name: 'Nick',

   // Accessor Property
   get name() {
      return this._name;
   },

   set name(name) {
      this._name = name;
   }
};

// Use accessor property just as data property
console.log(person1.name); // 'Nick'
person1.name = 'Greg';
console.log(person1.name); // 'Greg'

// Define data property 
Object.defineProperty(person1, '_age', 
      {
         value: 20,
         enumerable: true,
         configurable: true,
         writable: true
      }
);

// Define accessor property
Object.defineProperty(person1, 'age', 
      {
         enumberable: true,
         configurable: true,
         get : function () {
            return this._age;
         },
         set : function (newAge) {
            return this._age = newAge; // has to use this
         }
      }
);

// Delete a property
if('age' in person1){
   var descriptor = Object.getOwnPropertyDescriptor(person1, 'age')
   if(descriptor.configurable)
      delete person1.age;
}






