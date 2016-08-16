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
function searchNum(array) {
  
}

module.exports = exercise;

},{}],2:[function(require,module,exports){
var lib = require('./exercises.js');
console.log('sumArgs(2,3,4) returns %d', lib.sumArgs(2,3,4));
console.log('sumArgsWhile("2",4,5) returns %d', lib.sumArgsWhile("2",4,5));
console.log('sumArgsImproved("2",4,5) returns %d', lib.sumArgsImproved('2', 4, 5));
console.log('Is 67 a prime number?  %s', lib.isPrime(67));
console.log('Is 68 a prime number?  %s', lib.isPrime(68));

},{"./exercises.js":1}]},{},[2]);
