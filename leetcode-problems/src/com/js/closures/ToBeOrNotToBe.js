/*
Problem link 
https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

Solution link


*/

const type1 = function(){

    var expect = function(val) {
        return {
            toBe: function(other){
                if(val === other) return true;
                throw new Error("Not Equal");
            },
            notToBe: function(other){
                if(val !== other) return true;
                throw new Error("Equal");
            }
        }
    };
    
    console.log(expect(5).toBe(5));
    console.log(expect(5).notToBe(null));
}();



const type2 = function(){

    const expect = (val) => {
        return {
            toBe: (other) => {
                if (val === other) return true;
                throw new Error('Not Equal');
            },
            notToBe: (other) => {
                if (val !== other) return true;
                else throw new Error('Equal');
            }
        }
    };
    
    console.log(expect(5).toBe(5));
    console.log(expect(5).notToBe(null));
}();

