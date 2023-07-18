/**
Given an integer array nums, move all the even integers at the beginning of 
the array followed by all the odd integers.

Return any array that satisfies this condition.


Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]
Output: [0]
 */

function sortByParity(nums) {
    let index1 = 0;
    
    for(let index2 = 0; index2 < nums.length; index2++) {
        if(nums[index2] % 2 === 0) {
            // Perform swap via destructuring
            [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
            index1++;
        }
    }
    
    return nums;
}