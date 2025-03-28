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

// suppose we create 100 students then 100 times the function will be created
// memory will be wasted

// 4th approach create one function and use it for all students 