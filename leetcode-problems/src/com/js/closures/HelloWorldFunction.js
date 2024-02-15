/*
Problem link 
https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript

Solution link
https://www.youtube.com/watch?v=P9Ldx1eTlRc&list=PLQpVsaqBj4RIpDQIVowFni58LsK4cM9Qz
*/



const type1 = function(){
    // this is normal javascript code where we will be returning one function

    var createHelloWorld = function() {
        return function(...args) {
            return "Hello World";
        }
    };
    
    let f = createHelloWorld();
    console.log(f());
}()



const type2 = function(){
    // this is returning a anynomous function
    var createHelloWorld = function() {
        return (...args) => "Hello World";
    };

    let f = createHelloWorld();
    console.log(f());

}()



const type3 = function(){
    // this is returning a anynomous function
    var createHelloWorld = () => () => "Hello World";

    let f = createHelloWorld();
    console.log(f());

}()
