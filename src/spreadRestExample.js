let oldArray = [1, 2, 3, 4, 5];
//this is an example of spread using array
let newArray = [...oldArray, 6, 7, 8, 9];

console.log(oldArray);
console.log(newArray);

let male = { "gender": "male" };
//this is an example of spread using object
let abhishek = { "firstName": "Abhishek", "lastName": "Ghosh", ...male };

console.log(male);
console.log(abhishek);


//Example of rest
let sort = (...args) => {
    return args.sort((a,b)=>a-b);
}

console.log(sort(2, 3, 1, 5, 10, 9,20));