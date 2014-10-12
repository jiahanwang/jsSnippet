// This example shows the importance of this keyword 


function Person (name) {
   
   this.name = name;

   this.id = 1;

   var gender = 'male';

   this.sayName1 = function () {
      console.log('This is inside a constructor ' + name); // check local variable, then arguments, then global
   }
   this.sayId1= function () {
      console.log('This is inside a constructor ' + id); // never checks this
   }
   this.sayGender1= function () {
      console.log('This is inside a constructor ' + gender); // get the local variable
   }
}

// prototype's own name
Person.prototype.name = "Prototype";

Person.prototype.sayName2 = function () {
   console.log('This is inside a prototype ' + name); // global
}
Person.prototype.sayName3 = function () {
   console.log('This is inside a prototype ' + this.name); // constructor not prototype 
}
Person.prototype.sayId2 = function () {
   console.log('This is inside a prototype ' + id); //global
}
Person.prototype.sayId3 = function () {
   console.log('This is inside a prototype ' + this.id); //global
}
Person.prototype.sayGender2 = function () {
   console.log('This is inside a prototype ' + gender); //global
}
Person.prototype.sayGender3 = function () {
   console.log('This is inside a prototype ' + this.gender); //global
}

var name = 'Global';
var id = 1111111;
var gender = "Global";
var person1 = new Person("Instance");

person1.sayName1();
person1.sayName2();
person1.sayName3();
person1.__proto__.sayName3();

person1.sayId1();
person1.sayId2();
person1.sayId3();

person1.sayGender1();
person1.sayGender2();
person1.sayGender3(); //undefined



