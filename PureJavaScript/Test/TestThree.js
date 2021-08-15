// 数组奇数子数组和
// https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays/
"use strict";

var arr = new Array();
arr = [10, 11, 12];
sumOddLengthSubarrays(arr);

function sumOddLengthSubarrays(arr) {
  var sum = 0;
  var len = arr.length;
  var lEven, lOdd, rEven, rOdd;
  for (let i = 0; i < len; i++) {
    lOdd = (i + 1) / 2;
    lEven = i / 2 + 1;
    rOdd = (len - i) / 2;
    rEven = (len - i + 1) / 2;
    sum += (lOdd * rOdd + lEven * rEven) * arr[i];
  }
  console.log(sum);
}
