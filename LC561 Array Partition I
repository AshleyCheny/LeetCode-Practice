/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    //first sort the array
    nums.sort(function(a, b){
        return a - b;   
    });
    
    //the problem can be understood as adding alternative integers in the array
    var sum = 0;
    for(var i = 0; i < nums.length; i += 2){
        sum += nums[i];
    }
    
    return sum;
    
};
