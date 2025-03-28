// const getName = () => {
//     console.log(this);
//     const show = () => {
//         console.log(this);
//     }
//     show();
// }

// // getName.call(10);
// getName();


// const obj = {
//     rere: "John",
//     show: () => {
//         console.log(this);
//     },
//     fn: function() {
//         console.log("normal function", this);
//         const show = () => {
//             console.log("arrow function", this);
//         }
//         function show1() {
//             console.log("normal function", this);
//         }
//         show();
//         show1();
//     }
// }

// obj.show();
// obj.fn();

// Rule:- In case of 


// setTimeout(obj.fn, 0);


// "use strict"
// const obj = {
//     name: "John",
//     show: () => {
//         console.log(this);
//     },
//     fn: function() {
//         console.log(this);
//     }
// }
// obj.show();
// obj.fn();


// setTimeout(obj.fn, 0);
// setTimeout(() => obj.fn(), 0);
// setTimeout(function() {
//     obj.fn();
// }, 0);

// setTimeout(obj.fn.bind(obj), 0);
// setTimeout(obj.show.bind(obj), 0);



// const person = {
//     name: 'GFG',
//     greet: function(city) {
//         console.log('Hello, ' + this.name + ' from ' + city);
//     }
// };
// person.greet('Delhi');
// const greet = person.greet;
// greet.call(person, 'Noida'); 


// function show() {
//     console.log(this);
// }

// show.call(null);

"use strict"
undefined = 523;
NaN = "magic";
const obj = {};
Object.defineProperty(obj, 'readOnly', { writable:false, value:true} );
obj.readOnly = false;

console.log(undefined, NaN, obj.readOnly);



