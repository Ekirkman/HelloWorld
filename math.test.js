const assert = require('assert');
const { sub } = require('./math');

// Test sub function
console.log('Running tests for sub function...');

// Test 1: Basic subtraction
assert.strictEqual(sub(5, 3), 2, 'sub(5, 3) should equal 2');
console.log('✓ Test 1 passed: sub(5, 3) = 2');

// Test 2: Subtracting negative numbers
assert.strictEqual(sub(10, -5), 15, 'sub(10, -5) should equal 15');
console.log('✓ Test 2 passed: sub(10, -5) = 15');

// Test 3: Subtracting zero
assert.strictEqual(sub(7, 0), 7, 'sub(7, 0) should equal 7');
console.log('✓ Test 3 passed: sub(7, 0) = 7');

// Test 4: Result is negative
assert.strictEqual(sub(3, 8), -5, 'sub(3, 8) should equal -5');
console.log('✓ Test 4 passed: sub(3, 8) = -5');

console.log('\nAll tests passed! ✓');
