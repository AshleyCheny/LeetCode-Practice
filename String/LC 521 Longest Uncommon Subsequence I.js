/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 /**
 * Summary
 * Simple analysis can lead to a an easy solution
 */
 
var findLUSlength = function(a, b) {
    
    if(a == b) {
        return -1;
    }
    
    return Math.max(a.length, b.length);

};
