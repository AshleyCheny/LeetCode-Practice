/**
 * @param {number} num
 * @return {number}
 */

// recursion
var addDigits = function(num) {
    
    // convert num to array
    var numArr = num.toString().split("");

    // base case: check if numArr only have one element aka only one digit
    if(numArr.length == 1) {
        return num;
    }
    
    // reduce the numArr to a sum
    var newNum = numArr.reduce((sum, currentValue) => sum + parseInt(currentValue), 0);
    return addDigits(newNum);
   
};
