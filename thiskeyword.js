// // (function(){
// //     console.log("this keyword", this);
// // })()


// // function show() {
// //     console.log("this keyword", this);
// // }

// // new show();

// // const obj = {
// //     name: "John",
// //     show: function() {
// //         console.log("this keyword", this);
// //     }
// // }

// // // obj.show();
// // const fn = obj.show;
// // fn();

// // Rule 1:- if you are calling a function directly then this keyword will point to the global object
// // Rule 2:- if you are calling a function using new keyword then this keyword will point to the new object
// // Rule 3:- if you are calling a function using call or apply method then this keyword will point to the object passed in the call or apply method
// // Rule 4:- if you are calling a function using bind method then this keyword will point to the object passed in the bind method
// // Rule 5:- if you are calling a function using dot operator then this keyword will point to the object before dot operator
// // Rule 6:- if you are calling a function using reference then this keyword will point to the object which is holding the reference eg:- const fn = obj.show; fn();

// //     console.log("this keyword", this);
// //     function fn() {
// //         console.log("inner function", this);
// //         function fn1() {
// //             console.log("inner function 1", this);
// //         }
// //         new fn1();
// //     }
// //     fn();
// // }

// // // show();
// // const fn = show;
// // fn();


// // "use strict";

// // function show() {
// //     console.log("this keyword", this);
// // }

// // const obj = { name: "John" }
// // const obj1 = { name: "tom" }
// // const obj2 = { name: "jerry" }


// // show.call(obj, 1, 2, 3);  // Rule * => call method is used to set 
// // show.apply(obj1, [1, 2, 3]);
// // // show.bind(obj2)();
// // const fn = show.bind(obj2, 1, 2, 3);
// // fn();

// // new show();
// // show()

// // const obj3 = {
// //     name: "John",
// //     show: function() {
// //         console.log("this keyword", this);
// //     }
// // }
// // obj3.show();
// // obj3.show.call(obj3);

// // const character1 = {
// //     name: "Iron man",
// //     wand: "Hollywood and Phoenix feather",
// //     age: 9,
// //     getDetails: function () {
// //         console.log(this);
        
// //         // return `${this.name}, age ${this.age} years and his wand is made up of ${this.wand}`;
// //     }
// // }

// // const character2 = {
//     // name: "Albus Dumbledore",
//     // wand: "Thestral tail hair",
//     // age: 150,
//     // getDetails: function () {
//     //     console.log(this);
        
//     //     // return `${this.name}, age ${this.age} years and his wand is made up of ${this.wand}`;
//     // }
// // }

// // character1.getDetails();
// // character2.getDetails();


// // function getDetails(wand, age) {    
// //     console.log(`${this.name}, age ${age} years and his wand is made up of ${wand}`);   
// // }

// // getDetails.call(character1, "Hollywood and Phoenix feather", 9);
// // getDetails.call(character2, "Thestral tail hair", 150);
// // const fn = getDetails.bind(character1, "Hollywood and Phoenix feather", 9);
// // fn();


// // const product = {
// //     name: "Laptop",
// //     price: 1000,
// //     quantity: 10
// // }

// // function item(quantity, price) {
// //     console.log(`Name = ${this.name}, Quantity = ${quantity}, Price = ${price}`);
// // }

// // item.call(product, 10, 1000);
// // item.apply(product, [10, 1000]);
// // const fn1 = item.bind(product, 10, 1000);
// // fn1();


// // "use strict";
// // function show() {
// //     console.log(this);
// // }
// // const c = null;
// // show.call(c);
// // show.apply(c);
// // const fn2 = show.bind(c);
// // fn2();


// // Rule In strict mode if you pass primitive value to call, apply or bind method then this keyword will be the primitive value
// // In non-strict mode if you pass primitive value to call, apply or bind method then this keyword will be the global object in case of null or undefined and in case of other values it will be the Object of the primitive value

// "use strict";
// const obj = {
//     name: "John",
//     // show: function() {
//     //     console.log(this);
//     // }
//     show() {
//         console.log(this);
//     }
//     // show: () => {
//     //     console.log(this);
//     // }
// }

// // obj.show();
// // obj.show.call(null);
// // obj.show.apply(null);
// // const fn = obj.show;
// // fn();






















