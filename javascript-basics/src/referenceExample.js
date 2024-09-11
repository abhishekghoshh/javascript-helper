//number, string, booleans are primitive type
//it will copy the value only not the reference

let a = 10;
let b = a;
console.log(b);
a = 11;
console.log(b);


//array, objects are reference type
//whenever we are assigning object or array to another variable it will copy its memory
let person = { "name": "Abhishek Ghosh" };
let personCopy = person;
console.log(personCopy);
person.name = "Nasim Molla";
console.log(personCopy);


// we can use spread operator to achieve copy by value
person.name = "Abhishek Ghosh";
personCopy = { ...person };
console.log(personCopy);
person.name = "Nasim Molla";
console.log(personCopy);