(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Write a function sumArgs that is able to handle an unlimited number of arguments. It will sum all of the arguments
// even if they are numbers in the form of a string. Write two solutions: one using a for loop and the other using a while loop.

var exercise = {};
// implemented with for loop
exercise.sumArgs = function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += +arguments[i];
  }
  // performance numbers
  // 0.020 for unary operator
  // 0.0249 for parseInt
  return sum;
}

// implemented with while loop
exercise.sumArgsWhile = function() {
  var sum = 0;
  var i = 0;
  while (i < arguments.length) {
    sum += +arguments[i];
    i++;
  }
  return sum;
}

// implement with rest parameters
exercise.sumArgsImproved = function(...args) {
  let sum = 0;
  for (arg of args) {
    sum += +arg;
  }
  return sum;
}

// Write a function isPrime that receives a number N and returns true if the number is prime and false if it is not. A prime number 
// is a number that is only divisible by 1 and itself. Therefore, you need to check that every number smaller than N doesn't divide
// evenly into N except for 1. Write two solutions: one using a for loop and the other using a while loop.
// implemented with for loop
exercise.isPrime = function(N) {
  if (N < 2) return false;
  for (var i = 2; i < N; i++) {
    if (N % i === 0) {
      return false;
    }
  }
  return true;
}

// implemented with while loop
exercise.isPrimeWhile = function(N) {
  if (N < 2) return false;
  var i = 2;
  while (i < N) {
    if (N % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

// Write a function searchNum that iterates through a sorted array and returns the target number if found. The function should also
// log each iteration to the console.
exercise.searchNum = function(array, target) {
  for (num of array) {
    console.log(num);
    if (num === target) {
      return true;
    }
  }
  return false;
}

// ['G', 'PG', 'PG-13', 'R', 'NC-17'] Write a function whatMovies that receives an age and returns an array of all the movies that
// age can watch. Write two solutions: one using if...else, the other using switch... case
// implemented with if statements
exercise.whatMovies = function(age) {
  const ratings = ['G', 'PG', 'PG-13', 'R', 'NC-17'];
  if (age < 9) {
    return [ratings[0]];
  } else if (age < 13) {
    return ratings.slice(0, -3);
  } else if (age < 17) {
    return ratings.slice(0, -2);
  } else {
    return ratings;
  }
}

// implemented with switch case
exercise.whatMoviesSwitch = function(age) {
  const ratings = ['G', 'PG', 'PG-13', 'R', 'NC-17'];
  let stature;
  if (age < 9) {
    stature = 'child';
  } else if (age < 13) {
    stature = 'young person';
  } else if (age < 17) {
    stature = 'teen';
  } else {
    stature = 'adult';
  }

  switch(stature) {
    case 'child':
      return [ratings[0]];
    case 'young person':
      return ratings.slice(0, -3);
    case 'teen':
      return ratings.slice(0, -2);
    default:
      return ratings;
  }
}

module.exports = exercise;

},{}],2:[function(require,module,exports){
var lib = require('./exercises.js');
console.log('sumArgs(2,3,4) returns %d', lib.sumArgs(2,3,4));
console.log('sumArgsWhile("2",4,5) returns %d', lib.sumArgsWhile("2",4,5));
console.log('sumArgsImproved("2",4,5) returns %d', lib.sumArgsImproved('2', 4, 5));
console.log('Is 67 a prime number?  %s', lib.isPrime(67));
console.log('Is 68 a prime number?  %s', lib.isPrime(68));
console.log('Is 7 within [1, 2, 3, 4]? %s', lib.searchNum([1,2,3,4], 7));
console.log('Is 2 within [1, 2, 3, 4]? %s', lib.searchNum([1,2,3,4], 2));
console.log('If I\'m 9 I can see which movies? %o', lib.whatMovies(9));
console.log('If I\'m 39 I can see which movies? %o', lib.whatMovies(39));
console.log('If I\'m 9 I can see which movies? %o', lib.whatMoviesSwitch(9));
console.log('If I\'m 39 I can see which movies? %o', lib.whatMoviesSwitch(39));

},{"./exercises.js":1}]},{},[2]);
