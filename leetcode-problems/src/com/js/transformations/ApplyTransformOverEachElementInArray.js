/*
Problem link 
https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

Solution link
https://www.youtube.com/watch?v=7FhJHA5jlYk&list=PLQpVsaqBj4RIpDQIVowFni58LsK4cM9Qz&index=4

*/

const type1 = function(){
    var map = function(arr, fn) {
        return arr
            .map(fn);
    };

    let arr = [1,2,3];
    function plusI(n, i) { 
        return n + i; 
    }

    arr = map(arr,plusI);
    console.log(arr)
}()


const type2 = function(){
    var map = function(arr, fn) {
        const newArr = [];
        
        // we can loop in array in array or object in javascript
        // only thing is the key is always is in string, so we have to parse it to the number
        for(let i in arr){
            newArr.push(fn(arr[i],Number(i)));
        }
        return newArr;
    };

    let arr = [1,2,3];
    function plusI(n, i) { 
        return n + i; 
    }

    arr = map(arr,plusI);
    console.log(arr)
}();

const type3 = function(){
    var map = function(arr, fn) {
        const newArr = [];
        // so to remove the previous problem we can start with the traditional for loop
        for (let i = 0; i < arr.length; i++) {
            newArr.push(fn(arr[i], i));
        }
        return newArr;
    };

    let arr = [1,2,3];
    function plusI(n, i) { 
        return n + i; 
    }

    arr = map(arr,plusI);
    console.log(arr)
}();
