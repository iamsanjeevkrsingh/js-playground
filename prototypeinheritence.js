// 1. Prototype Chain Inheritance

// Objects inherit properties and methods from their prototype chain (i.e., __proto__).
// If a property is not found in an object, JavaScript looks up the prototype chain.

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.name} make a sound`);
// }

// const a = new Animal("Dog");
// a.speak();  

// 2. Constructor Inheritence

// function Animal(name) {    
//     this.name = name;
// }

// Animal.prototype.speak = function(){
//     console.log(`${this.name} make a sound`);
// }

// function Dog(name, breed) {
//     Animal.call(this, name); // Inherit the property
//     this.breed = breed;
// }

// //Inherit animal prototype method
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;


// //Adding new prototype method to dog
// Dog.prototype.bark = function() {
//     console.log(`${this.name} is barking`);
// }

// const d = new Dog("tommy", "jermen sheford");
// console.log(d);


// 3. Object deligation / Object inheritence
// const animal = {
//     speak() {
//         console.log(`${this.name} makes a sound`);
//     }
// };

// const dog = Object.create(animal);
// console.log(dog);

// 4. Class based inheritence
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog);


