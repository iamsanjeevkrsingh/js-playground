// const obj = { fn: ()=> { return 1 }, fn1(){}, item: 'Iphone' };
// console.log(JSON.stringify(obj));


/**
 * Number, String, Symbol, undefined, null, BigInt, Boolean, Object
*/


// const obj = {
//     item: 'sas',
//     1: 1,
//     null: null,
//     true: true,
// }
// console.log(JSON.stringify(obj));

// const task = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Data from resolve');
//     }, 5000)
// })

// task.then((data) => {
//     console.log(data);
//     return data;
//     // return Promise.resolve(data)
// }).catch((err) => {
//     console.log(err);
//     // return Promise.reject(data)
// }).then((data) => {
//     console.log(data);
// })
// .finally(() => {
//     console.log('reereerre');
// })

// .then, .catch, .finally  

// types of promise
// Promise.all, Promise.allSettled, Promise.any, Promise.race


const pr = new Promise((res, rej) => {
    setTimeout(() => {
        res('Done');
    }, 1000)
})


async function test() {
    // pr.then((res) => {
    //     console.log(res);
    // })

    const data = await pr;
    console.log(data);
    return 4;
}

test().then((res) => {
    console.log(res);
})