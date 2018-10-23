# Office Hours 18 October 2018

Function callbacks demonstrated through array methods such as map and forEach which take element, index, array parameters in the callback definition.

Good examples of callbacks: (Follow-up)

- array method callbacks
- addEventListener

What is the difference between statements and expressions in JavaScript? (Follow-up)

statement -> function declaration

expression -> function expression and arrow function

Why would you chose to use one form of function defintion over the others? (Follow-up)

`array.push()` constructs an array by appending elements to the end of the array. How would you construct an array by appending elements to the beginning of the array?

```
// reverse an array [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]
var array = [1, 2, 3, 4, 5];

var result = [];

// use unshift to append to the beginning of the array instead of the end
array.forEach(elem => result.unshift(elem));
//=> [5, 4, 3, 2, 1]
```

Reversing an array — partial functional style

```
var array = [1, 2, 3, 4, 5];

array.reduceRight((acc, elem) => (acc.push(elem), acc), []);
//=> [5, 4, 3, 2, 1]

array.reduce((acc, elem) => (acc.unshift(elem), acc), []);
//=> [5, 4, 3, 2, 1]
```

Reversing an array — functional style (no array mutation)

```
var array = [1, 2, 3, 4, 5];

array.reduce((acc, elem) => (acc = [elem, ...acc], acc), []);
//=> [5, 4, 3, 2, 1]

array.reduce((acc, elem) => (acc = [elem].concat(acc), acc), []);
//=> [5, 4, 3, 2, 1]
```

Return the second largest element of an array without mutating the original array

```
var array = [4, 2, 6, 7, 9, 1];

var secondLargest = array.reduce((acc, elem) => (acc.push(elem), acc.sort((a,b) => a - b)), [])[1];
//=> 2
```
