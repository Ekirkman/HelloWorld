const assert = require('assert');
const { add } = require('./math');

// Test 1: Adding positive numbers
assert.strictEqual(add(2, 3), 5, 'add(2, 3) should equal 5');

// Test 2: Adding negative numbers
assert.strictEqual(add(-1, -1), -2, 'add(-1, -1) should equal -2');

// Test 3: Adding zero
assert.strictEqual(add(5, 0), 5, 'add(5, 0) should equal 5');

console.log('All tests passed!');
