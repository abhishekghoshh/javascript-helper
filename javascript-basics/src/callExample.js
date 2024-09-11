// call() binds the function to the first object passed in 
//rest parameters are passed in subsequent values

let obj = { num: 2 };
let addtoThis = function(a, b, c){
    console.log(this.num +a + b + c);
}
addtoThis.call(obj, 1, 2, 3);

let greeting = function (greet) {
    console.log(`${greet} ${this.firstName} ${this.lastName}`);
}
let Abhishek = { firstName: "Abhishek", lastName: "Ghosh" };
let Nasim = { firstName: "Nasim", lastName: "Molla" };

greeting.call(Abhishek, "Hi");
greeting.call(Nasim, "Hello");