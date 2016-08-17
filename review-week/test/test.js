const tape = require('tape');
const lib = require('../exercises');

tape('sum arguments for loop', function(t) {
  t.plan(2);
  t.equal(lib.sumArgs(2,3,4), 9);
  t.equal(lib.sumArgs('3', '5', 30, 2), 40);
});

tape('sum arguments while loop', function(t) {
  t.plan(2);
  t.equal(lib.sumArgsWhile(10, 100, 1000), 1110);
  t.equal(lib.sumArgsWhile('10', '100'), 110);
});

tape('sum arguments for-of loop', function(t) {
  t.plan(2);
  t.equal(lib.sumArgsImproved(30, 40, 30), 100);
  t.equal(lib.sumArgsImproved('2', 4, 5), 11);
});

tape('determine if prime for loop', function(t) {
  t.plan(2);
  t.equal(lib.isPrime(67), true);
  t.equal(lib.isPrime(68), false);
});

tape('determine if prime while loop', function(t) {
  t.plan(2);
  t.equal(lib.isPrime(67), true);
  t.equal(lib.isPrime(68), false);
});

tape('find a number in an array', function(t) {
  t.plan(2);
  const arr = [1,2,3,4];
  t.equals(lib.searchNum(arr, 2), true);
  t.equals(lib.searchNum(arr, 5), false);
});

tape('determine the movie ratings which apply', function(t) {
  t.plan(4);
  t.deepEquals(lib.whatMovies(1), ['G']);
  t.deepEquals(lib.whatMovies(11), ['G', 'PG']);
  t.deepEquals(lib.whatMovies(16), ['G', 'PG', 'PG-13']);
  t.deepEquals(lib.whatMovies(39), ['G', 'PG', 'PG-13', 'R', 'NC-17']);
});

tape('determine the movie ratings which apply switch case', function(t) {
  t.plan(4);
  t.deepEquals(lib.whatMoviesSwitch(1), ['G']);
  t.deepEquals(lib.whatMoviesSwitch(11), ['G', 'PG']);
  t.deepEquals(lib.whatMoviesSwitch(16), ['G', 'PG', 'PG-13']);
  t.deepEquals(lib.whatMoviesSwitch(39), ['G', 'PG', 'PG-13', 'R', 'NC-17']);
});
