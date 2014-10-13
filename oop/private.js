/*
 * Add private property will be shared by all
 *
 */

function SuperPerson () {
   
   var count = 0;

   this.increment = function () {
      count ++;
   }
   
   this.getCount = function () {
      return count;
   }
}

function Person () {

   var id = 1;

   this.getId = function () {
      return id;
   }
   this.setId = function (newID) {
      id = newId;
   }

   this.increment();
}

Person.prototype = new SuperPerson();
Person.prototype.constructor = Person;

var person = new Person();
console.log(person.id);
console.log(person.count);
console.log(person.__proto__.count);
console.log(person.getCount());
var person2 = new Person();
console.log(person2.getCount());

/*
 *
 * Add private shared by using IIFE
 *
 * */

var Person = (function () {
   
   var count = 0;

   function InnerPerson (name) {
      this.name = name;
      this.incrementCount();
   }

   InnerPerson.prototype.incrementCount = function () {
      count++;
   }
   
   InnerPerson.prototype.getCount = function () {
      return count;
   }

   return InnerPerson;
})();

var person = new Person('Mike');
console.log(person.name);
console.log(person.count);
console.log(person.__proto__.count);
console.log(person.__proto__.getCount());
console.log(person.getCount());
var person2 = new Person('John');
console.log(person2.getCount());

