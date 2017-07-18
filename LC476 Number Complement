/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    //tranfer the integer to its binary format
    num = num.toString(2).split('');
    
    //complement the binary
    num.forEach(function(element, index){
        if(element === '0'){
            num[index] = '1';
        }else{
            num[index] = '0';
        }
    });
    
    //convert binary to decimal in JavaScript
    num = parseInt(num.join(''), 2);
    
    return num;
};
