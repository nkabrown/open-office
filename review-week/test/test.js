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
