var a: number;
var str: string;
var arr: number[];
var ne: any;
var n = 10;
//n = "m" -> this line give error
var m: number | boolean;//union type

let message: any;
message = "ABC";

let another = (<string>message).toLowerCase();
console.log(another);

let anotherOne = (message as string).toLowerCase();
console.log(anotherOne);