var reduce = function(nums, fn, init) {
    let n = init;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        
        n = fn(n,element);
    }

    return n;
    
};

let nums = [1,2,3,4]
let fn = function sum(accum, curr){
    return accum + curr * curr;
}
let init = 100;

var k = reduce(nums,fn,init);

console.log(k);
