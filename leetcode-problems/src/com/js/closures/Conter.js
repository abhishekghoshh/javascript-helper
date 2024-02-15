/*
Problem link 
https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

Solution link
https://www.youtube.com/watch?v=yEGQQAG5V68&list=PLQpVsaqBj4RIpDQIVowFni58LsK4cM9Qz&index=2

*/


const type1 = function(){
    
    // this will use closure
    let createCounter = function(n) {
        // counter variable will not be accessible outside
        // but just like OOPS we can create methods to access that
        let counter = n;
        return function() {
            return counter++;
        };
    };

    let counter = createCounter(10);
    console.log(counter());
    console.log(counter());
    console.log(counter());
}();



const type2 = function(){
    
    // this will use closure
    // using anynomous function
    let createCounter = function(n) {
        // counter variable will not be accessible outside
        // but just like OOPS we can create methods to access that
        let counter = n;
        return () => counter++;
    };

    let counter = createCounter(10);
    console.log(counter());
    console.log(counter());
    console.log(counter());
}();




const type3 = function(){
    
    // this will use closure
    // using anynomous function
    let createCounter = function(n) {
        return () => n++;
    };

    let counter = createCounter(10);
    console.log(counter());
    console.log(counter());
    console.log(counter());
}();



const type4 = function(){
    
    // this will use closure
    // using anynomous function
    let createCounter = (n) => () => n++;

    let counter = createCounter(10);
    console.log(counter());
    console.log(counter());
    console.log(counter());
}();

