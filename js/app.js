// task 1

let string = 'some test string';

const firstLast = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;

console.log(firstLast);

// task 2

const word = string.indexOf('sring');

console.log(word);

// task 3

const first = string.indexOf(' ');
const second = string.indexOf(' ', first + 1);

console.log(second)

// task 4

const line = string.slice(5, 9);

console.log(line);

// task 5

value = Math.PI
value = parseFloat(value.toFixed(2));

console.log(value);

// task 6

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

console.log(value);

// task 7

value = Math.random();
value = parseFloat(value.toFixed(2));

console.log(value);

// task 8

value = Math.random() * 100 + 1;
value = parseFloat(value.toFixed(0));

console.log(value);

//   task 9

value = 0.6 + 0.7;
// value = (0.6 * 10 + 0.7 * 10) / 10;
// value = parseFloat(value.toFixed(1));
value = +value.toFixed(1);

console.log(value);

// task from the presentation Numbers 

value = parseInt('100$');

console.log(value);

// task 10

const filed = {
  product: 'iPhone'
};


// task 11

filed.price = 1000;
filed.currency = 'dollar';


// task 12

filed.detalis = {};
filed.detalis.model = '8 plus';
filed.detalis.color = 'space gray';

console.log(filed);

