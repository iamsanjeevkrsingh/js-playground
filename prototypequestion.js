// Basic (10 Questions)
// // What is the prototype in JavaScript?

// prototype is a mechanism in js which allow object to inerit the property of another object.

// How do you access the prototype of an object?

// const obj = {}
// console.log(obj.__proto__);
// console.log(Object.getPrototypeOf(obj));

// __proto__ is depricated you can use Object.getPrototypeOf

// What is the default prototype of an object created with {}?

// The default prototype of an object created using {} or new Object()
// is Object.prototype. This means every plain object in javascript
// inherits properties and method from Object.prototype.

// How do you add a method to a constructor function’s prototype?

// function Calculator() {

// }
// Calculator.prototype.add = function(a, b) {
//     console.log(a + b);
// }

// const c = new Calculator();
// c.add(10, 20);

// What is Object.prototype?

// Whenever you create an object using {} or new Object() then 
// prototype of the object is Object.prototype thant means then object
// that is created inherited the property and method from Object.prototype.

// How do you check if an object has a property of its own and not from its prototype?

// const obj = {name: 'John'};
// console.log(obj.hasOwnProperty('name')); // this works but can be overriden
// console.log(Object.hasOwn(obj, 'name'));

// What is the difference between __proto__ and prototype?

// __proto__ => whenever you create an object using {} or new Object
// it will inherited the property and method from Object.prototype using 
// __proto__ you can get and set the prototype of an object.
// eg:-
// const obj = {}
// obj.__proto__.getFullName = function() {
//     console.log('full name');
// }
// console.log(obj.__proto__);

// prototype:- Whenever you create a constructor function you can set 
// and get the prototype of the function using prototype. If the object that
// is created from constructor function then the property and method is inherited
// for that object from function prototype

// function printName() {}

// printName.prototype.eligibleToVote = function(age) {
//     if(age >= 18) {
//         console.log("Eligible");
//     }else{
//         console.log("Not eligible");
//     }
// }

// const name = new printName();
// name.__proto__.getAge = function(){}
// console.log(name);

// How can you set an object’s prototype after it has been created?

// using __proto__ or Object.setPrototypeOf

// What happens if you override the prototype of a constructor function after creating an instance?

// function Person(name) {
//     console.log(name);
// }

// Person.prototype.isValidName = function() {
//     console.log('valid');
// }

// const p1 = new Person('tom');
// console.log(p1);
// const p2 = new Person('tim');
// console.log(p2);

// Person.prototype = {
//     showName: function() {}
// }

// const p3 = new Person('john');
// console.log(p3);


// If you override the function proto type it will not imact the 
// object which already create but after overriding the object
// which is create has impacted.


// What is Object.create() used for?

// const Parent = {
//     name: "John"
// }

// const obj = Object.create(Parent);
// console.log(obj);

// It creates a new object and set its prototype to the object you pass as an argument.


// Medium (10 Questions)
// Write a function constructor Person that has a method greet() using prototype.

// function Person(name) {
//     console.log(name);   
// }

// Person.prototype.greet = function () {
//     console.log("Hello");
// }

// const obj = new Person('sanjeev');
// obj.greet()

// How can you iterate over only an object's own properties, ignoring prototype properties?

// function Person(name) {
//     this.name = name;
// }
// Person.prototype.age = 25;
// const p = new Person("John");

// for (const key in p) {
//     console.log(key); 
// }

// const obj = { name: 'item' }

// for(const item in obj) {
//     console.log(item);
// }

// Why Does for in Include Prototype Properties?

// 1. JavaScript objects have a prototype chain.
// 2. for...in traverses up the prototype chain, checking all enumerable properties.
// 3. By default, methods like Object.prototype.toString() are non-enumerable, so they are skipped.
// 4. But custom prototype properties (like age) are enumerable, so they appear.
// Using Object.keys, Object.hasOwn, obj.hasOwnProperty


// Explain what happens when you modify Array.prototype.

// const arr = [];
// console.log(arr.push(2));
// console.log(arr.length);

// arr.__proto__ = function(){}
// console.log(arr.push(2));

// console.dir(arr.__proto__.__proto__.__proto__);
// If you modify the array proto type all the array will be impacted
// instead you can use es6 function like map, filter, reduce


// Can a prototype itself have a prototype? Demonstrate with an example.

// yes

// function show() {}

// show.prototype.item = function(){}
// const obj = new show();

// // obj -> prototype -> function prototype -> prototype -> Object prototype -> prototype -> null
// Yes, a prototype itself has a prototype!
// ✔ This forms the prototype chain, which allows inheritance in JavaScript.
// ✔ Each prototype eventually links to Object.prototype, except for null.


// How do you prevent changes to an object’s prototype?

// Object.freeze() -> Prevents adding, modifying, or deleting properties (including prototype properties)
// const obj = {};
// Object.freeze(obj.__proto__);
// Object.freeze(obj);
// Object.prototype.newMethod = function() {};  //error in case of use strict
// delete Object.prototype.toString; //error in case of use strict
// obj.name = 'sasa'
// console.log(obj);

// Object.seal() -> Prototype properties cannot be added or removed, but existing ones can be modified.
// const obj = {};
// Object.seal(Object.getPrototypeOf(obj));
// Object.prototype.newMethod = function() {};
// delete Object.prototype.toString;
// Object.prototype.toString = function() { return "Modified"; };
// console.log(obj.toString()); 

// Object.preventExtensions() -> Allows modification and deletion of existing properties but prevents new ones from being added.
// const obj = {};
// Object.preventExtensions(Object.getPrototypeOf(obj));
// Object.prototype.newMethod = function() {};
// delete Object.prototype.toString; 
// Object.prototype.toString = function() { return "Changed"; };
// console.log(obj.toString());

// Write a function that checks if an object is an instance of a given constructor using prototypes.

// function Person(){}

// Person.prototype.checkInstance = function() {
//     return this.constructor.name === 'Person';
// }

// function checkInstanceOf(obj, constructor) {
//     let proto = Object.getPrototypeOf(obj);
//     while(proto) {
//         if(proto === constructor.prototype) return true;
//         proto = Object.getPrototypeOf(proto)
//     }
//     return false;
// }
// const p = new Person();
// const obj = Object.create(p);
// console.log(checkInstanceOf(p, Person));

// Create a function that adds a method reverseString() to String.prototype that returns the reversed string.

// String.prototype.reverseString = function() {    
//     return this.split('').reverse().join('')
// }

// const str = "this";
// console.log(str.reverseString());

// Explain the difference between Object.getPrototypeOf(obj) and obj.__proto__.

// Object.getPrototypeOf(obj) is a getter function is used to get the prototype of an obj.
// obj.__proto__ is a getter and setter function is used to get and set the prototype of an obj.

// How do you remove a property from an object’s prototype?

// function Person() {}
// Person.prototype.sayHello = function() {
//     console.log("Hello!");
// };

// const p1 = new Person();
// p1.sayHello();
// console.log(p1);
// delete Person.prototype.sayHello;
// console.log(p1);


// Explain the prototype chain using an example.

// function Parent() {}

// Parent.prototype.getAmount = function() {
//     console.log('ttttt');
// }

// const child2 = Object.create(Parent.prototype);
// child2.getAmount()

// child prototype -> Parent.prototype -> Object prototype -> null

// Hard (10 Questions)
// Write a function that mimics the behavior of Object.create().

// function MyObjectCreate(obj) {
//     function test() {

//     }
//     test.prototype = obj;
//     return new test();
// }

// const test = {
//     name: 'ffddf'
// }
// console.log(test);

// const p = MyObjectCreate(test);
// console.log(p);

// Implement a simple class-like inheritance using prototypes (without class).

// function Animal(name) {    
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(this.name , " makes a noise");
// }

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

//Inheriting from animal
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

//Adding method to dog prototype
// Dog.prototype.bark = function() {
//     console.log(this.name , " braks ");
// }

// const d1 = new Dog('Tommy', "Jerman Sheford");
// console.log(d1.speak());


// Modify the Function.prototype to add a custom method delay(ms) that delays the function execution.

// Function.prototype.delay = function(ms) {
//     const originalFunction = this;    
//     return function(...args) {
//         setTimeout(() => originalFunction.apply(this, args), ms);
//     };
// };

// function sayHello(name) {
//     console.log(`Hello, ${name}!`);
// }
// sayHello = sayHello.delay(2000);
// sayHello("sas", "sasa");

// Create a polyfill for Array.prototype.map() using only prototypes.

// Array.prototype.myMap = function(cb){    

//     if(typeof cb !== 'function') {
//         throw new Error(`${cb} is not a function`)
//     }

//     const arr = this;
//     const result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(cb(arr[i], i, arr));
//     }
//     return result;
// }

// const arr = [];
// const finalResult = arr.myMap("sa");
// console.log(finalResult);

// const result = arr.map("sa");
// console.log(result);

// How can you implement multiple inheritance using prototypes in JavaScript?

// Write a prototype-based deep clone function for objects.

// Explain how prototype-based delegation works when overriding inherited methods.

// Implement a once() method using prototypes so that a function runs only once.

// Extend Array.prototype to add a method last() that returns the last element of an array.

// Without using class, implement a method chaining system using prototypes.
























// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.eat = function() {
//     console.log(`${this.name} is eating`);
// };

// function Dog(name, breed) {
//     Animal.call(this, name); // Calling the Animal constructor
//     this.breed = breed;
// }

// // Inherit from Animal
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     console.log(`${this.name} is barking`);
// };

// const dog1 = new Dog("Buddy", "Golden Retriever");

// dog1.eat();  
// dog1.bark();

// console.log(dog1.__proto__ === Dog.prototype);
// console.log(Dog.prototype.__proto__ === Animal.prototype);
// console.log(Animal.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null); 
