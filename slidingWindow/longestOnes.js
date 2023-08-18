/**
Given a binary array nums and an integer k, return the maximum number of 
consecutive 1's in the array if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,|1,1,1,1,1,1,1,1,1,1|,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */


function longestOnes(nums, k) {
    let start = 0;
    let longest = 0;
    let count = 0;
    let flip = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
        } else if (nums[i] === 0 && flip !== k) {
            flip++;
            count++;
        } else {
            longest = Math.max(longest, count);
            i = start;
            start++;
            count = 0;
            flip = 0;
        }
    }

    return Math.max(longest, count);
}