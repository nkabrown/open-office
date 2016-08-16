// Write a function sumArgs that is able to handle an unlimited number of arguments. It will sum all of the arguments
// even if they are numbers in the form of a string. Write two solutions: one using a for loop and the other using a while loop.
// implemented with for loop
function sumArgs() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += +arguments[i];
  }
  // performance numbers
  // 0.15 for unary operator
  // 0.0249 for parseInt
  return sum;
}

// implemented with while loop
function sumArgsWhile() {
  var sum = 0;
  var i = 0;
  while (i < arguments.length) {
    sum += +arguments[i];
    i++;
  }
  return sum;
}

// Write a function isPrime that receives a number N and returns true if the number is prime and false if it is not. A prime number 
// is a number that is only divisible by 1 and itself. Therefore, you need to check that every number smaller than N doesn't divide
// evenly into N except for 1. Write two solutions: one using a for loop and the other using a while loop.
