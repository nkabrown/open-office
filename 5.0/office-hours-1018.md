# Office Hours 18 October 2018

Function callbacks demonstrated through array methods such as `map` and `forEach` which take element, index, array parameters (or the current value of the element, the index of the element, and the object being traversed as parameters) in the callback definition. Remember these parameters have an expected position. The first parameter will always be the current value of the element, the second the index of the element, etc.

You have to provide the first parameter when you call the callback, but you can provide more, even all.

```
var array = [1, 2, 3, 4, 5];

// call map with only first available callback parameter (the current value of the element)
array.map(elem => elem + 2);
//=> [3, 4, 5, 6, 7]

// call map with the first two available callback parameters (the current value of the
// element and the index of the element)
array.map((elem, i) => elem + 2 + i);
//=> [3, 5, 7, 9, 11]

// call map with all three available callback parameters (the current value of the
// element, the index of the element, and the object being traversed)
array.map(((elem, i, obj) => obj);
//=> [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]
// returns an array of arrays of the array
```

Good examples of callbacks: (Follow-up)

- array method callbacks
- event listeners

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

result
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
*note* – comma operator: The `reduce` functions above and at the bottom of the page show a nice example of a case where the comma operator comes in handy. The comma operator evaluates each expression and returns only the last expression. Since `push` and `unshift` do not return the array but return the new length of the array, the comma operator allows us to insert new elements into the array in the first evaluation and then return the array in the second evaluation back to the callback function. At the bottom of the page it allows us to do two manipulations to the array; both insert a new element and then sort and return the sorted array to the callback function.

Reversing an array — functional style (no array mutation)
```
var array = [1, 2, 3, 4, 5];

array.reduce((acc, elem) => acc = [elem, ...acc], []);
//=> [5, 4, 3, 2, 1]

array.reduce((acc, elem) => acc = [elem].concat(acc), []);
//=> [5, 4, 3, 2, 1]
```

Return the second largest element of an array without mutating the original array

```
var array = [4, 6, 7, 2, 9, 1];

array.reduce((acc, elem) => (acc.push(elem), acc.sort((a,b) => a - b)), [])[1];
//=> 2
```
