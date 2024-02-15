/*
Problem link 
https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript

Solution link
https://www.youtube.com/watch?v=KmTbYfpGxdM&list=PLQpVsaqBj4RIpDQIVowFni58LsK4cM9Qz&index=6

*/

const type1 = function(){

    var reduce = function(nums, fn, init) {
        return nums.reduce(fn,init);
    };

    const nums = [1,2,3,4]
    function sum(accum, curr) { 
        return accum + curr; 
    }

    const ans = reduce(nums,sum,0);
    console.log(ans);
}();

const type2 = function(){

    var reduce = function(nums, fn, init) {
        let res = init;
        for(let n of nums){
            res = fn(res , n);
        }
        return res;
    };

    const nums = [1,2,3,4]
    function sum(accum, curr) { 
        return accum + curr; 
    }

    const ans = reduce(nums,sum,0);
    console.log(ans);
}();


const type3 = function(){

    var reduce = function(nums, fn, init) {
        let res = init;
        for(let i = 0 ; i < nums.length ; i++){
            res = fn(res , nums[i]);
        }
        return res;
    };

    const nums = [1,2,3,4]
    function sum(accum, curr) { 
        return accum + curr; 
    }

    const ans = reduce(nums,sum,0);
    console.log(ans);
}();