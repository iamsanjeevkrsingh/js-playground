// function parent() {
//     console.log('parent');
    

//     function child() {
//         console.log('child');

//         function innerChild() {
//             console.log('inner child');
//         }

//         innerChild()
//     }

//     child()
// }

// parent();


// console.log(1);

// setTimeout(() => console.log(2), 0)

// Promise.resolve().then(() => console.log(3))

// console.log(4);

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0)

// console.log(3);

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");

// Question
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }


// console.log("A");  // execute
// setTimeout(() => console.log("B"), 0); // web api (macro task)
// Promise.resolve().then(() => console.log("C")); // web api (micro task)
// console.log("D"); // execute

// setTimeout(() => console.log(1), 0);
// setTimeout(() => console.log(2), 0);
// setTimeout(() => console.log(3), 0);
// console.log(4);

// setTimeout(() => {
//     console.log("Timeout");
//     Promise.resolve().then(() => console.log("Promise"));
// }, 0);

// console.log("Start");
// setTimeout(() => console.log("setTimeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// Question
// async function test() {
//     console.log(1);
//     await Promise.resolve();
//     console.log(2);
// }
// console.log(3);
// test();
// console.log(4);


// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => console.log("B"), 0);
// }, 0);
//   console.log("C");

// setTimeout(() => console.log("Timeout 1"), 0);
// Promise.resolve().then(() => {
//   console.log("Promise 1");
//   setTimeout(() => console.log("Timeout 2"), 0);
// });
// console.log("Sync 1");


//Question
// async function foo() {
//     console.log(1);
//     await new Promise(resolve => setTimeout(resolve, 0));
//     console.log(2);
// }
// console.log(3);
// foo();
// console.log(4);


// async function foo() {
//     return 10;
// }
// foo().then(console.log);
// console.log("End");

// setTimeout(() => console.log("Timeout"), 0);
// let start = Date.now();
// while (Date.now() - start < 1000);
// console.log("Loop Done");

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => {
//   console.log("C");
//   setTimeout(() => console.log("D"), 0);
// });
// console.log("E");

// Question
// async function test() {
//     console.log("Start");
//     await Promise.resolve();
//     console.log("Middle");
//     await Promise.resolve();
//     console.log("End");
// }
// test();
// console.log("Outside");
  

// for(let i = 0; i < 20; i++) {
//     if(i == 15) {
//         console.log(i, 'is 15');
//     }
//     Promise.resolve().then(() => console.log('inside promise'))
// }
  

// console.log(1);

// setTimeout(function () {
//   console.log(2);
// }, 0);

// Promise.resolve()
//   .then(function () {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(4);
//   });



// console.log("begins");

// setTimeout(() => {
//   console.log("setTimeout 1");
//   Promise.resolve().then(() => {
//     console.log("promise 1");
//   });
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log("promise 2");
//   setTimeout(function () {
//     console.log("setTimeout 2");
//     resolve("resolve 1");
//   }, 0);
// }).then((res) => {
//   console.log("dot then 1");
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });


//Question
// async function async1() {          
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//   }
  
//   async function async2() {
//     console.log("async2");
//   }
  
//   console.log("script start");
  
//   setTimeout(function () {
//     console.log("setTimeout"); 
//   }, 0);
  
//   async1();
  
//   new Promise(function (resolve) {  
//     console.log("promise1");
//     resolve();
//   }).then(function () {
//     console.log("promise2");
//   });
  
//   console.log("script end");
  

  