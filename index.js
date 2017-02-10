'use strict';

/**
 * @module isOlder
 * @description Compare two elements to see which is "older" (higher up in the DOM)
 * @param {element} a - Element to be compared to
 * @param {element} b - Element to compare
 * @return {number} Returns 1 if `a` is higher up the DOM than `b`, 0 if equal, and -1 otherwise
 */
module.exports = function (a, b) {
	var ancestors = function (element) {
		var count = 0;
		while (element.parentNode) {
			element = element.parentNode;
			count++;
		}
		return count;
	};
	return ancestors(b) - ancestors(a);
};
