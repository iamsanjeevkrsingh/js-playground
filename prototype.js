// Problem:- Create data for student in a class for 100 students

// let studentname1 = "John";
// let studentAge1 = 20;

// let studentname2 = "Jane";
// let studentAge2 = 21;

// let studentname3 = "Jim";
// let studentAge3 = 22;

// in the above approach managing is very difficult
// according to time we need to add more information for each student (like city, gender, etc)


// 2nd approch use object

// let student1 = {
//     name: "John",
//     age: 20,
//     checkEligibleForNextClass: function() {
//         if (this.age > 18) {
//             console.log("Eligible for next class");
//         } else {
//             console.log("Not eligible for next class");
//         }
//     },
//     isValidName: function() {
//         if (this.name.length > 3) {
//             console.log("Valid name");
//         } else {
//             console.log("Invalid name");
//         }
//     }
// }

// let student2 = {
//     name: "Jane",
//     age: 21,
//     checkEligibleForNextClass: function() {
//         if (this.age > 18) {
//             console.log("Eligible for next class");
//         } else {
//             console.log("Not eligible for next class");
//         }
//     },
//     isValidName: function() {
//         if (this.name.length > 3) {
//             console.log("Valid name");
//         } else {
//             console.log("Invalid name");
//         }
//     }
// }
// let student3 = {
//     name: "Jim",
//     age: 22,
//     checkEligibleForNextClass: function() {
//         if (this.age > 18) {
//             console.log("Eligible for next class");
//         } else {
//             console.log("Not eligible for next class");
//         }
//     },
//     isValidName: function() {
//         if (this.name.length > 3) {
//             console.log("Valid name");
//         } else {
//             console.log("Invalid name");
//         }
//     }
// }

// in the above approach we are repeating the same code for each student
// 3rd approach use constructor function

// function CreateStudent(name, age) {
//     const obj = {};
//     obj.name = name;
//     obj.age = age;
//     obj.checkEligibleForNextClass = function() {
//         if (this.age > 18) {
//             console.log("Eligible for next class");
//         }
//     };
//     obj.isValidName = function() {
//         if (this.name.length > 3) {
//             console.log("Valid name");
//         } else {
//             console.log("Invalid name");
//         }
//     }
//     return obj;
// }

// let student1 = new CreateStudent("John", 20);
// console.log(student1);

// let student2 = new CreateStudent("Jane", 21);
// console.log(student2);

// let student3 = new CreateStudent("Jim", 22);
// console.log(student3);

// suppose we create 100 students then 100 times the function will be created memory will be wasted

// 4th approach create one function and use it for all students

// function MyObjectCreate(obj) {
//     function F() {}
//     F.prototype = obj;
//     return new F();
// }

// function CreateStudent(name, age) {
//     const obj = Object.create(studentTask);
//     obj.name = name;
//     obj.age = age;
//     return obj;
// }


// const studentTask = {
//     checkEligibleForNextClass: function() {
//         if (this.age > 18) {
//             console.log("Eligible for next class", this);
//         }
//     },
//     // isValidName: function() {
//     //     if (this.name.length > 3) {
//     //         console.log("Valid name", this);
//     //     } else {
//     //         console.log("Invalid name", this);
//     //     }
//     // }
// }

// const student1 = CreateStudent("John", 20);
// const student2 = CreateStudent("Jane", 21);
// const student3 = CreateStudent("Jim", 22);

// console.log(student1);
// student1.checkEligibleForNextClass();
// // student1.isValidName();

// student2.checkEligibleForNextClass();
// // student2.isValidName();

// student3.checkEligibleForNextClass();
// // student3.isValidName();


function MakeStudent(name, age) {
    this.name = name;
    this.age = age;
}

MakeStudent.prototype.checkEligibleForNextClass = function() {
    if (this.age > 18) {
        console.log("Eligible for next class", this);
    }else{
        console.log("Not eligible for next class", this);
    }
}

const student1 = new MakeStudent("John", 20);
console.log(student1);
student1.checkEligibleForNextClass();
const fn = student1.checkEligibleForNextClass;
fn();











// function parent(name) {
//     this.name = name;
// }

// const parent1 = new parent("John");
// console.log(Object.getPrototypeOf(parent1) === parent.prototype);

// function child(name) {
//     this.name = name;
// }

// child.prototype = parent;

// const child1 = new child("Jane");
// console.log(child1);


// Default behavior of function

// function show() {
//     console.log("show");
// }

// console.dir(show);

// 1. Every function has one special property called prototype
// 2. Prototype is an object
// 3. Prototype is used to store methods and properties that are shared by all instances of the function
// 4. Prototype is used to implement inheritance


// 1. Every object has one special property called __proto__ or Object.getPrototypeOf()
// 2. __proto__ is an object
// 3. __proto__ is used to store methods and properties that are shared by all instances of the object
// 4. __proto__ is used to implement inheritance


// function parent() {

// }

// function child(name) {
//     this.name = name;
// }

// child.prototype = parent;

// const child1 = new child("John");
// console.log(child1);



















