/**
 * @param {number[]} candies
 * @return {number}
 */

/**
 * Date: 7/23/2017
 * Idea: Save the candies in an object with the type of candies and the number of different types
 *       Then count the total properties of the object. (Disgard)
 *       The problem can be converted to "How to remove duplicate characters in an array or a string?"
 * Complexity: O(n)
 */
var distributeCandies = function(candies) {
    
    // How to remove duplicate characters in an array or a string?
    
    // Save the unique integers in the array uniqueInt
    var uniqueInt = [];
    var numOfCandies = candies.length;
    
    for(var i = 0; i < numOfCandies; i++){
        // If the integer is not in the uniqueInt array, then save it in the array
        // Else continue the loop
        if(uniqueInt.indexOf(candies[i]) < 0){
            uniqueInt.push(candies[i]);
        }
    }
    
    // If the the kinds of candies is greater than half of the number of candies, sister can only get the half number of different kinds of candies
    if(uniqueInt.length > numOfCandies/2){
        return numOfCandies/2;
    }else{
        return uniqueInt.length;
    }
    
};
