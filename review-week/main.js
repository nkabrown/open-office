var lib = require('./exercises.js');
console.log('sumArgs(2,3,4) returns %d', lib.sumArgs(2,3,4));
console.log('sumArgsWhile("2",4,5) returns %d', lib.sumArgsWhile("2",4,5));
console.log('sumArgsImproved("2",4,5) returns %d', lib.sumArgsImproved('2', 4, 5));
console.log('Is 67 a prime number?  %s', lib.isPrime(67));
console.log('Is 68 a prime number?  %s', lib.isPrime(68));
console.log('Is 7 within [1, 2, 3, 4]? %s', lib.searchNum([1,2,3,4], 7));
console.log('Is 2 within [1, 2, 3, 4]? %s', lib.searchNum([1,2,3,4], 2));
