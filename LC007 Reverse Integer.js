/**
 * @param {number} x
 * @return {number}
 */

/**
 * Questions: What is the range of 32-bit signed integer? How to represent it in JS?
 *            How to convert number to array? And convert array to number?
 */
var reverse = function(x) {
    
    //Reversed the integer's absolute value to a string
    reversedStr = Math.abs(x).toString().split('').reverse().join('');
    
    //If the original number is negative, add "-" to the number
    if(x < 0){
        reversedInt = -parseInt(reversedStr);
    }else{
        reversedInt = parseInt(reversedStr);
    }
    
    //check if the reversed integer overflows
    if(reversedInt < -2147483648 || reversedInt > 2147483647){
        return 0;
    }
    
    return reversedInt;
    
};
