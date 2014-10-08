/**
*
* Catergory: OOP 
* Usage: Scope safe constructor 
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

function Person (name, age, job) {
   
   if (this instanceof Person) {
      this.name = name;
      this.age = age;
      this.job = job;
   } else {
      return new Person(name, age, job);
   }
}


var person1 = new Person ('Mike', 20, 'Developer');

var person2 = Person ('John', 21, 'Business'); // if not scope-safe, all the properties will be added to the global

