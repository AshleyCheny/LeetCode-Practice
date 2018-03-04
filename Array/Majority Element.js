/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 1. Analyzation: 
 * use an obj to save element as property, save times as value
 * go through the object again, and output the one meets the condition
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
/**
 * 2. Question: 
 * only one element will meet the requirement?
 */
/**
 * 3. Reflection: 
 * - More than one element meets the condition, output the majority one.
 * Eg, [3,2,3]
 */
var majorityElement = function(nums) {
    let obj = {};
    let threshold = Math.floor(nums.length/2);
    let candidate;
    let candidateTimes = 0;
    
    // save element as property, save times as value in the object
    for(let [index, value] of nums.entries()) {
        
        // if a new property, set the value to be 1
        if(!obj.hasOwnProperty(value)) {
            obj[value] = 1;
        } 
        // else, increment the value
        else {
            obj[value]++;
        }
    }
    
    // go through the object again, check the value of each property
    for(let prop in obj) {
        
        // find candidates that meet the threshold
        if(obj[prop] >= threshold) {
            // update the candidate and candidate appears times to find the most majority candidate
            if(obj[prop] >= candidateTimes) {
                candidateTimes = obj[prop];
                candidate = prop;
            }
        }
    }
    
    return parseInt(candidate);
};
