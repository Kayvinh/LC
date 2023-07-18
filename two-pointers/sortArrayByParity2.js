/**
Given an array of integers nums, half of the integers in nums are odd, 
and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever 
nums[i] is even, i is even.

Return any answer array that satisfies this condition.


Example 1:
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Example 2:
Input: nums = [2,3]
Output: [2,3]

Example 3:
Input: nums = [3,4]
Output: [4,3]
 */

function sortArrayByParity2(nums) {
    let evenIdx = 0;
    let oddIdx = 1;
    let solution = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            solution[evenIdx] = nums[i];
            evenIdx += 2;
        }

        if(nums[i] % 2 === 1) {
            solution[oddIdx] = nums[i];
            oddIdx += 2;
        }

    }

    return solution;
}