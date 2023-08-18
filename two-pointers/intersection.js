/**
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 */

function intersection(num1, num2) {
    let index1 = 0;
    let index2 = 0;
    let setResult = new Set();

    while(index1 < num1.length || index2 < num2.length) {
        if(num2.includes(num1[index1])) {
            setResult.add(num1[index1]);
        } else if (num1.includes(num2[index2])) {
            setResult.add(num2[index2]);
        }

        index1++;
        index2++;
    }

    const result = [...setResult];

    return result;
}