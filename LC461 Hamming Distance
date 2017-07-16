/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
    //how do I convert an integer to binary in javascript? toString(2)
    //how to compare the two binaries. XOR
    var xOR = x ^ y;
    
    var xORArr = xOR.toString(2).split('');
    var count = 0;
    xORArr.forEach(function(element){
        if(element == 1){
            count++;
        }
    });
    
    return count;
};
