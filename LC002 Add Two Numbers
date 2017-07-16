/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Date: 7/3/2017
 * Idea: Save the LinkedList data in order in a string, then reverse the string, then convert the string to number,
 *       then do the addition of the two numbers, convert the result to a string again, reverse the string and save the chars in a         
 *       LinkedList.
 * Functions: convertLTSTN(ListNode)
 *            convertNTSTL(Number)
 * Questions: The input are arrays?   They are linked lists, tested via return li.next
 *            How to store Linked List data in a string?   Use a while loop, concatenate each node's data
 *            forEach method only apply to arrays?
 *            reverse method only apply to arrays?    Yes
 *            How to reverse a string?   Use str.split('').reverse.join('');
 *            How to convert a string to a number? 
 *            How to create a new Linked List?   Create Single Linked List function and add prototype to the function.
 *            How to add two large numbers in javascript without loosing precision??
*/

var addTwoNumbers = function(l1, l2) {
    
    result = sumStrings(convertLTS(l1), convertLTS(l2));
    
    return convertSTATL(result);
    
};

// Converst Linked List to reversed strings
var convertLTS = function(node){
    var str = "";
    
    while(node !== null){
        str += node.val;
        node = node.next;
    }
    
    return reverseStr(str);
};

//reverse string function
var reverseStr = function(str){
        return str.split('').reverse().join('');
    };

//Large Number Addition in Javascript (Ref: https://dev.to/briandgls/large-number-addition-in-javascript)
function addition(a, b, acc = '', carry = 0) {
  if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '');

  carry = carry + (~~a.pop() + ~~b.pop());
  acc = carry % 10 + acc;
  carry = carry > 9;

  return addition(a, b, acc, carry);
}

function sumStrings(a, b) {
  if (a === '0' && b === '0') return '0';
  return addition(a.split(''), b.split(''));
}

//convert string to linked list
var convertSTATL = function(str){
    
    str = str.split('').reverse();
    
    var resultList =  new SinglyList();
    
    str.forEach(function(element){
        resultList.add(parseInt(element));
        
    });
    
    return resultList.head;
    
};

// Single Linked List Data Structure in JavaScript(Ref: https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392)

function SinglyList() {
    this._length = 0;
    this.head = null;
}
 
SinglyList.prototype.add = function(value) {
    var node = new ListNode(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;
 
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this._length++;
     
    return node;
};
                    

