/**
Given an array of integers arr and two integers k and threshold, return the
 number of sub-arrays of size k and average greater than or equal to threshold.

 

Example 1:
Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 
6 respectively. All other sub-arrays of size 3 have averages less than 4 
(the threshold).

Example 2:
Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. 
Note that averages are not integers.
 */


function numOfSubarrays(arr, k, threshold) {
    let sum = 0;
    let left = 0;
    let count = 0;

    // calculate first window
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    if (sum / k >= threshold) count++;

    for (let i = k; i < arr.length; i++) {
        sum = sum + arr[i] - arr[left];
        left++;
        if (sum / k >= threshold) count++;
    }

    return count;
}
