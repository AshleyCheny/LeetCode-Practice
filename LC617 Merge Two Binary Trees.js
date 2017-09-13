/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

/**
 * Date: 7/16/2017
 * Idea: Iteration
 */
var mergeTrees = function(t1, t2) {
    //Declare a new node to store the new node value
    var newNode = new TreeNode();
    
    if(t1 === null && t2 === null){
        newNode = null;
        return newNode;
    }else if(t1 === null){
        newNode = t2;
        return newNode;
    }else if(t2 === null){
        newNode = t1;
        return newNode;
    }else{
        newNode.val = t1.val + t2.val;
        newNode.left = mergeTrees(t1.left, t2.left);
        newNode.right = mergeTrees(t1.right, t2.right);
        return newNode;
    }
    
};
