//question 1
// const p = Promise.resolve('resolved');
// p.then((value) => {
//     console.log(value);
// });

//question 2
// const p = Promise.reject(new Error('Oops!'));
// p.catch((error) => {
//     console.error(error);
// });

//question 3
// const p = Promise.resolve({ id: 1, name: 'Alice' });
// p.then((user) => {
//     console.log(user.id);
//     console.log(user.name);
// });

//question 4
// const p = Promise.resolve({ id: 1, name: 'Alice' });
// p.then((User) => {
//     console.log(User.name);
// });

//question 5
// const p = Promise.reject(new Error('Invalid id'));
// p.catch((error) => {
//     console.error(error);
// });

//question 6
// const p = Promise.resolve(42);

// p.then(value => {
//     console.log(`Resolved with value: ${value}`);
// })
// .catch(error => {
//     console.error(`Rejected with error: ${error}`);
// })
// .finally(() => {
//     console.log("Promise settled.");
// });

//question 7
// const p = Promise.resolve(21);

// p.then(value => {
//     const doubled = value * 2;
//     console.log(`Doubled value: ${doubled}`);
// })
// .catch(error => {
//     console.error(`Rejected with error: ${error}`);
// })
// .finally(() => {
//     console.log("Promise settled.");
// });

//question 8
// const p = Promise.reject(new Error('Invalid value'));

// p.catch(error => {
//     console.error(`Caught error: ${error.message}`);
//     return 0; 
// })
// .then(value => {
//     console.log(value);
// });

//question 9
// const promises = [
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.resolve(3)
// ];

// Promise.all(promises)
//   .then(results => {
//     console.log(results); //all promises
//   })
//   .catch(error => {
//     console.error('One of the promises failed:', error);
//   });

//question 10
const promises = [
  new Promise(resolve => setTimeout(() => resolve('a'), 100)), 
  new Promise(resolve => setTimeout(() => resolve('b'), 50)),
  new Promise(resolve => setTimeout(() => resolve('c'), 150))
];
Promise.race(promises)
  .then(result => {
    console.log(`First resolved promise: ${result}`); // 'b'
  })
  .catch(error => {
    console.error('One of the promises failed:', error);
  });

//Bonus Question
const p = Promise.resolve('World');
p.then(value => {
    console.log(`Hello, ${value}!`);
})