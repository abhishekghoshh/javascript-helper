
// function expression
let functionGreeting = function (firstName, lastName) {
    console.log(`Hi ${firstName} ${lastName}`);
}
functionGreeting("Abhishek", "Ghosh");

//imidiately invoked function
let imidiateInvokedGreeting = (function (firstName, lastName) {
    console.log(`Hi ${firstName} ${lastName}`);
}("Abhishek", "Ghosh"));

//lambda expression
let lambdaGereeting = (firstName, lastName) => {
    console.log(`Hi ${firstName} ${lastName}`);
};
lambdaGereeting("Abhishek", "Ghosh");

//lambda expression with shorter expression
let shorterGreeting = myName => `Hi ${myName}`;

console.log(shorterGreeting("Abhishek Ghosh"));