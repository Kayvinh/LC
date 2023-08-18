/**
Given a string, str, return the length of the longest substring without 
repeating characters.

Ex1:
Input: "bbbb"
Output: 1

Ex2: "asdfg"
Output: 5

Ex3: ""
Output: 0

Ex4: "conceptoftheday"
Output: 8, "oftheday"
 */


function longestUniqueSubstring(str) {
    let freq = {};
    let longest = 0;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] in freq && freq[str[i]] >= start) {
            start = freq[str[i]] + 1;
        }

        freq[str[i]] = i;
        longest = Math.max(longest, i - start + 1);
    }

    return longest;
}