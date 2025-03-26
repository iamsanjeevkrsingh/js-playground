function show() {
    let greet = "Hello";

    return function greeting() {
        console.log(`${greet} sanjeev`);  
    }
}

let fn = show();
console.dir(fn);


function clickHandler() {
    let count = 0;

    const button = document.getElementById('id');
    button.addEventListener('click', () => {
        count++;
        console.log(`Button clicked ${count} times`);
    })
}

clickHandler();

//Data encapsulation

// function createCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//     }

//     function decrement() {
//         count--;
//     }

//     function getCount() {
//         return count;
//     }

//     return {
//         increment,
//         decrement, 
//         getCount
//     }
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.decrement();

// console.log("Increment",counter.getCount());


let obj = { name: 'sanjeev' };
let arr = [obj];
obj = null;
console.dir(arr)







// // let width = 10;
// // let height = 10;


// function show(){
//     let width = 10;
//     let height = 10;

//     function inner() {
//         console.log(width, height);
//     }

//     console.dir(inner);
    
    
// }

// show()

// console.dir(show);
