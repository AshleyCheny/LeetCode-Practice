/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  //how to remove punctuation, spaces and symbols in javascript
  s = s.replace(/[^A-Za-z0-9]/g,"").replace(' ', '').toLowerCase();

  //convert a string to an array and reverse the array, then convert the array to string using join() without comma
  var reversedStr = s.split("").reverse().join('');

  //compare the original string and reversed str
  if(reversedStr === s){
    return true;
  } else {
    return false;
  }

};
