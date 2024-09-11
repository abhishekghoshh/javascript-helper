const numbers = [1, 2, 3];

[a, b, c] = numbers;
console.log(a, b, c);

[x, y] = numbers;
console.log(x, y);

[m, n, o, p] = numbers;
console.log(m, n, o, p);

[j, , k] = numbers;
console.log(j, k);

let { firstName, lastName } = { firstName: "Abhishek", lastName: "Ghosh" };
console.log(firstName, lastName);