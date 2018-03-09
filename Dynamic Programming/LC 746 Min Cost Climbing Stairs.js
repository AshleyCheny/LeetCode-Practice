/**
 * @param {number[]} cost
 * @return {number}
 */
/**
 * 1. Understanding:
 *  - an array, find the smallest sum of elements which has 1 or 2 intervals
 */
/**
 * 2. Summary:
 *  - use recursion: Let dp[i] be the minimum cost to reach the i-th stair.
 *  - Time: O(n), Space: O(1)
 */
var minCostClimbingStairs = function(cost) {
    
    let dp = [];
    let length = cost.length;
    
    dp[0] = cost[0];
    dp[1] = cost[1];
    
    for(let i = 2; i < cost.length; i++) {
        // get the minimun cost to reach i th stair
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
    }
    
    // at the end, get the array contains minimum cost to reach each of the element
    // compare the last two steps minimum cost
    return Math.min(dp[length-1], dp[length-2]);
    
};
