// (function(){
//     console.log("this keyword", this);
// })()


// function show() {
//     console.log("this keyword", this);
// }

// new show();

// const obj = {
//     name: "John",
//     show: function() {
//         console.log("this keyword", this);
//     }
// }

// // obj.show();
// const fn = obj.show;
// fn();

// Rule 1:- if you are calling a function directly then this keyword will point to the global object
// Rule 2:- if you are calling a function using new keyword then this keyword will point to the new object
// Rule 3:- if you are calling a function using call or apply method then this keyword will point to the object passed in the call or apply method
// Rule 4:- if you are calling a function using bind method then this keyword will point to the object passed in the bind method
// Rule 5:- if you are calling a function using dot operator then this keyword will point to the object before dot operator
// Rule 6:- if you are calling a function using reference then this keyword will point to the object which is holding the reference eg:- const fn = obj.show; fn();

//     console.log("this keyword", this);
//     function fn() {
//         console.log("inner function", this);
//         function fn1() {
//             console.log("inner function 1", this);
//         }
//         new fn1();
//     }
//     fn();
// }

// // show();
// const fn = show;
// fn();


"use strict";

function show() {
    console.log("this keyword", this);
}

const obj = { name: "John" }
const obj1 = { name: "tom" }
const obj2 = { name: "jerry" }


show.call(obj);
show.apply(obj1);
// show.bind(obj2)();
const fn = show.bind(obj2);
fn();

// new show();
// show()






















