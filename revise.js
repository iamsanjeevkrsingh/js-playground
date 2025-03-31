// "use strict";
// var a = "sasa";

// function myName() {
//     var a = "new sasa"; // Local variable 'a' inside function
//     console.log(a);
// }

// myName()
// console.log(a); 


let x = function a(...args){    
    const result = args.reduce((acc, curr) => acc = acc + curr, 0);
    console.log(result);
}

x(1,2,3,4,5,6)
