/*
Problem link 
https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

Solution link
https://www.youtube.com/watch?v=UXNXKGFZD08&list=PLQpVsaqBj4RIpDQIVowFni58LsK4cM9Qz&index=3
*/

const type1 = function(){

    // returning object with method enclosed inside the object
    var createCounter = function(val) {
        let counter = val;
        return {
            increment: function(){
                return ++counter;
            },
            reset: function(){
                counter = val;
                return counter;
            },
            decrement: function(){
                return --counter;
            },
        }
    };

    const counter = createCounter(10);
    console.log(counter.increment());
    console.log(counter.increment());
    console.log(counter.decrement());
    console.log(counter.reset());

}();



const type2 = function(){

    // returning object with method enclosed inside the object
    var createCounter = (val) => {
        let counter = val;
        return {
            increment: () => ++counter,
            reset: () => {
                counter = val;
                return counter;
            },
            decrement: () => --counter,
        }
    };

    const counter = createCounter(10);
    console.log(counter.increment());
    console.log(counter.increment());
    console.log(counter.decrement());
    console.log(counter.reset());

}();


const type3 = function(){

    // inner function
    const createCounter = function(init) {
        let count = init;
    
        function increment() {
            return ++count;
        }
    
        function decrement() {
            return --count;
        }
    
        function reset() {
            count = init;
            return count;
        }
    
        return {
            increment: increment,
            decrement: decrement,
            reset: reset
        }
    };
    const counter = createCounter(10);
    console.log(counter.increment());
    console.log(counter.increment());
    console.log(counter.decrement());
    console.log(counter.reset());

}();


const type4 = function(){

    // inline function
    // returning object with method enclosed inside the object
    var createCounter = (val) => {
        let counter = val;
        const increment = () => ++counter ;
        const reset = () => {
            counter = val;
            return counter;
        };
        const decrement = () => --counter ;
        return {
            increment: increment,
            reset: reset,
            decrement: decrement,
        }
    };

    const counter = createCounter(10);
    console.log(counter.increment());
    console.log(counter.increment());
    console.log(counter.decrement());
    console.log(counter.reset());

}();


const type5 = function(){

    // inline function
    // returning object with method enclosed inside the object
    var createCounter = (val) => {
        let counter = val;
        const increment = () => ++counter ;
        const reset = () => {
            counter = val;
            return counter;
        };
        const decrement = () => --counter ;

        // we do not need to do the mapping if the key and value are same name variable
        return {
            increment,
            reset,
            decrement,
        }
    };

    const counter = createCounter(10);
    console.log(counter.increment());
    console.log(counter.increment());
    console.log(counter.decrement());
    console.log(counter.reset());

}();