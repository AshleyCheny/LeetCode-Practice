/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * Date: 7/5/2017
 * Idea: Go through each element using "for";
 *       Check each number using "if";
 *       Use Module to check
 */
// var fizzBuzz = function(n) {
    
//     var result = [];
    
//     for(var i = 1; i <= n; i++){
//         if(i%15 === 0){
//             result.push('FizzBuzz');
//         }else if(i%3 === 0){
//             result.push("Fizz");
//         }else if(i%5 === 0){
//             result.push("Buzz");
//         }else{
//             result.push(i.toString());
//         }
//     }
    
//     return result;
    
// };

/**
 * Without using Module
 */
var fizzBuzz = function(n) {
    
    var result = [];
    for(var m = 0; m < n; m++){
        result.push((m+1).toString());
    }
    
    for(var i = 1; i <= n/3; i++){
        result[3i-1] = "Fizz";
    }
    
    for(var j = 1; j <= n/5; j++){
        result[5j-1] = "Buzz";
    }
    
    for(var k = 1; k <= n/15; k++){
        result[15k-1] = "FizzBuzz";
    }
    
    return result;
    
};
