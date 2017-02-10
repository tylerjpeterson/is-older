'use strict';

/**
 * isOlder mocha tests - https://mochajs.org/
 * @param {Object} isOlder
 */
describe('isOlder', function() {
	it('should be a function', function() {
		assert.equal(typeof isOlder, 'function');
	});

	describe('element comparison', function() {
		it('should evaluate older elements properly', function() {
			var a = document.querySelector('.itemOne.first');
			var b = document.querySelector('.list-item-two-link-one');
			assert.strictEqual(isOlder(a, b), 1);
		});

		it('should evaluate younger elements properly', function() {
			var a = document.querySelector('#linkZero');
			var b = document.querySelector('.itemOne.first');
			assert.strictEqual(isOlder(a, b), -1);
		});

		it('should evaluate elements of the same age properly', function() {
			var a = document.querySelector('#list-item-two');
			var b = document.querySelector('.itemOne.first');
			assert.strictEqual(isOlder(a, b), 0);
		});
	});

	describe('usage as a sorting callback', function() {
		it('should compare age based on depth in DOM', function() {
			var elements = Array.prototype.slice.call(document.querySelectorAll('*'));
			var sorted = elements.sort(isOlder).reverse();
			assert.equal(sorted[0].nodeName, 'HTML');
			assert.equal(sorted[1].nodeName, 'BODY');
		});
	});
});
