/**
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the
 resulting array. Return 0 if there is no such subarray.

 
Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Example 3:
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
 */


function findLongestSubarrayAfterDeleting(arr) {
    let max = 0;
    let deleted = 0;
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] === 1 || deleted === 0) {
            if (arr[right] === 0) deleted = 1;
            max = Math.max(max, right - left + 1 - deleted);
            right++;
        } else {
            if (arr[left] === 0) deleted = 0;
            left++;
        }
    }

    return max === arr.length ? max - 1 : max;
}