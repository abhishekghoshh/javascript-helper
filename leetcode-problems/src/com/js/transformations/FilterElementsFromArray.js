/*
Problem link 
https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

Solution link
https://www.youtube.com/watch?v=w1o81gbEEJU&list=PLQpVsaqBj4RIpDQIVowFni58LsK4cM9Qz&index=5

*/

// function programming way with the filter function
const type1 = function(){

    var filter = function(arr, fn) {
        return arr
            .filter(fn);
    };

    let arr = [0,10,20,30];

    function greaterThan10(n) {
        return n > 10; 
    }

    arr = filter(arr,greaterThan10)
    console.log(arr)
}();

// With declarative way
const type2 = function(){

    var filter = function(arr, fn) {
        let newArr = []
        for(let i in arr){
            if(fn(arr[i],Number(i))){
                newArr.push(arr[i])
            }
        }
        return newArr;
    };

    let arr = [0,10,20,30];

    function greaterThan10(n) {
        return n > 10; 
    }

    arr = filter(arr,greaterThan10)
    console.log(arr)
}();


const type3 = function(){

    var filter = function(arr, fn) {
        let newArr = []
        // this is better way
        for (let i = 0; i < arr.length; i++){
            if(fn(arr[i],i)){
                newArr.push(arr[i])
            }
        }
        return newArr;
    };

    let arr = [0,10,20,30];

    function greaterThan10(n) {
        return n > 10; 
    }

    arr = filter(arr,greaterThan10)
    console.log(arr)
}();

