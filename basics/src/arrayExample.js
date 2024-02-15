let arr = [];

arr.push(1, 2, 3, 4, 5);

console.log(arr);
console.log(arr.length);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift(1,6,7));
console.log(arr);

console.log(arr.pop());
console.log(arr);

arr.push(5);
console.log(arr);

console.log(arr.reverse());
console.log(arr.sort());

arr.forEach(value => console.log(value));

let addOne = arr.map(value => value + 1);
console.log(addOne);