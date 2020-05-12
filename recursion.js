// function countdown(x) {
//   console.log(x);
//   if (x <= 1) {
//     // base case
//     return;
//   } else {
//     countdown(x - 1); //recursive case
//   }
// }

// countdown(10);

function factorial(x) {
  if (x === 1) {
    console.log("returning 1");
    return 1; // this is first thing returned then the previous calls down the stack...
  } else {
    const num = x * factorial(x - 1); // these calls go on the stack
    console.log(`returning ${num} for ${x}`);
    return num;
  }
}

console.log(factorial(3));
