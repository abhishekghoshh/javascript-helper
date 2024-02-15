"use strict";
function show(a, b) {
    if (b === void 0) { b = 0; }
    console.log("a is " + a);
    console.log("b is " + b);
}
function showDetails(firstName, lastName, gender) {
    console.log("firstName is " + firstName);
    console.log("lastName is " + lastName);
    if (undefined != gender) {
        console.log("gender is " + gender);
    }
}
function echoAny(arg) {
    console.log(arg);
    return arg;
}
show(10, 20);
show(50);
showDetails("Abhishek", "ghosh", "male");
showDetails("Nasim", "Molla");
var randObject = { "name": "Abhishek Ghosh", "gender": "Male" };
echoAny(randObject);
