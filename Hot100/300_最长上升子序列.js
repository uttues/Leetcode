/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length
  if (!len) return 0

  let dp = new Array(len).fill(1), maxIndex

  for (let i = 0; i < len; i++) {
    // （满足要求nums[j] < nums[i]）用maxIndex记录[0,i-1]中dp值最大的下标
    maxIndex = i
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[j] >= dp[maxIndex]) {
        maxIndex = j
      }
    }
    if (maxIndex !== i) dp[i] = dp[maxIndex] + 1

  }
  return Math.max(...dp)
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));