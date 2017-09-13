/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    // Create a table object to contain all the Roman basic characters
    var romanTable = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    var convertedNum = [];
    var result = 0;
    s = s.split('');
    
    // Convert each character in the roman number to responding numbers and save it in an array
    for(var i = 0; i < s.length; i++){
        convertedNum.push(romanTable[s[i]]);
    }
    
    // Check the integers in the array. If the previous number is greater or equal to the latter number, than add the previous number. Otherwise substract the previous number.
    for(var j = 0; j < s.length; j++){
        if(convertedNum[j] < convertedNum[j+1]){
            result -= convertedNum[j];
        }else{
            result += convertedNum[j];
        }
    }
   
    return result;
    
};
