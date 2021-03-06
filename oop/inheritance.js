/**
*
* Catergory: OOP 
* Usage: Inhertiance 
* Source: Pro JavaScript - Nicholas C.Zakas
*
**/

/*
 * Constructor Inheritance
 */
// Super type
function Rectangular(length, width) {
   this.length = length;
   this.width = width;
}

Rectangular.prototype.getArea = function () {
   return this.length * this.width;
}

Rectangular.prototype.toString = function () {
   return "[Rectangular length:" + this.length + " width:" + this.width + "]";
}

// Sub type
function Square(size) {
   this.length = size;
   this.width = size;
}

Square.prototype = new Rectangular();
Square.prototype.constructor = Square; // don't forget to change the constructor
Square.prototype.toString = function () {
   return "[Square length:" + this.length + " width:" + this.width + "]";
}

/*
 * Constructor Inheritance HTML5
 */
function Rectangular(length, width) {
   this.length = length;
   this.width = width;
}

Rectangular.prototype.getArea = function () {
   return this.length * this.width;
}

Rectangular.prototype.toString = function () {
   return "[Rectangular length:" + this.length + " width:" + this.width + "]";
}

// Sub type
function Square(size) {
   this.length = size;
   this.height = size;
}

if (Object.create) {
   Square.prototype = Object.create(Rectangular.prototype, 
                                 {
                                    constructor: {
                                       configurable: false,
                                       enumberable: false,
                                       value: Square,
                                       writable: true;
                                    }
                                 });
} else {
   inheritPrototype(Rectangular.prototype, Square);
}

function inheritPrototype (prototype, subtype) {
   // Parasitic inheritance
   var new_prototype = object(prototype);
   new_prototype.constructor = subtype;
   subtype.prototype = new_prototype;
}

function object(prototype) {
   // Prototypal inheritance
   function F () {};
   F.prototype = prototype;
   return new F();
}

Square.prototype.toString = function () {
   return "[Square length:" + this.length + " width:" + this.width + "]";
}

/*
 * Ultimate: Constructor Inheritance and Stealing
 */
function Rectangular(length, width) {
   this.length = length;
   this.width = width;
}

Rectangular.prototype.getArea = function () {
   return this.length * this.width;
}

Rectangular.prototype.toString = function () {
   return "[Rectangular length:" + this.length + " width:" + this.width + "]";
}

// Sub type
function Square(size) {
   Rectangluar.call(this, size, size);
}


Square.prototype = Object.create(Rectangular.prototype, 
                                 {
                                    constructor: {
                                       configurable: false,
                                       enumberable: false,
                                       value: Square,
                                       writable: true;
                                    }
                                 });

Square.prototype.toString = function () {
   return "[Square length:" + this.length + " width:" + this.width + "]";
}
