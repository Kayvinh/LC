/**
https://leetcode.com/problems/count-number-of-nice-subarrays/
Given an array of integers nums and an integer k. A continuous subarray is 
called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

Example 1:
Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

Example 2:
Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There is no odd numbers in the array.

Example 3:
Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
 */


// [2,2,2,1,2,2,1,2,2,2]
// count: 2
// i: 7
// oddCount: 2
// start: 0
function niceSubarrays(nums, k) {
    let odds = 0;
    let count = 0;
    let prefix = 0

    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 === 1) {
            odds += 1
            prefix = 0
        }

        while (odds === k && i <= j) {
            if (nums[i] % 2 != 0) odds -= 1
            i++
            prefix++

        }

        count += prefix

    }
    return count
}