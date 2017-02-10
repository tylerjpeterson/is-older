![100% test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

# is-older
> Compare the age of two elements based on their position in the DOM

Compares two elements to see which is "older" (higher up in the DOM).
Age is determined by the number of ancestors each element has.
Can be passed as a sort callback when using [`Array.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Installation
Install via npm.

```sh
$ npm i is-older --save
```

## Usage
Require and call.

```html
<div>
  <div id="two">
    <p id="one"></p>
  </div>
  <p id="three"></p>
</div>
```

```js
var isOlder = require('is-older');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

console.log(isOlder(two, one));   // returns 1
console.log(isOlder(one, two));   // returns -1
console.log(isOlder(one, three)); // returns 0
```

### Sorting
You can pass as a callback to `Array.sort` to arrange a collection of elements by their age:

```js
var els = document.querySelector('*');

console.log(els.sort(isOlder)).reverse();
// `els` is sorted from oldest to youngest

console.log(els.sort(isOlder));
// `els` is sorted from youngest to oldest
```
