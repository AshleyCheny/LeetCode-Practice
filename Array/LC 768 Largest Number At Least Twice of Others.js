/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 1. Understanding: 
 * - at least twice as much as every other number in the array
 * - return the index of the available largest number
 */
/**
 * 2. Analyzation
 * - keep the array in an object(key: the element, value: the index of the element),
 * - check if the largest key is at least twice as much as the second largest key, 
 * - if yes, return the largest key value.
 * - else, return -1
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
/**
 * 3. Question
 * - Will the nums array have repeat element??
 */
/**
 * 4. Summary
 * - array + largest num ==> Dynamic Programming(save the largest number and its index, save the second largest if required)
 */
var dominantIndex = function(nums) {
    
    // check the edge case(when there is only one element in the array)
    if(nums.length === 1) {
        return 0;
    }
    
    // arrObj: to save the array's element as the key and index as the value
    let arrObj = {};
    // objKeyArr: to save the arrObj key array
    let objKeyArr;
    
    for(let [index, value] of nums.entries()) {
        arrObj[value] = index;
    }
    
    // get the keys array
    objKeyArr = Object.keys(arrObj);
    
    // check if the array has only value 0
    if(objKeyArr.length === 1 && objKeyArr[0] == 0) {
        return 0;
    }
    
    // compare the last key with the second last key*2
    return objKeyArr[objKeyArr.length-1] >= objKeyArr[objKeyArr.length-2]*2 ? arrObj[objKeyArr[objKeyArr.length-1]] : -1;
    
};
