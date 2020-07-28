/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length, res = 0, max
  if (!len) return 0

  let dp = new Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    max = 0
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        if (dp[j] > max) max = dp[j]
      }
    }
    dp[i] = max + 1
    res = Math.max(res, dp[i])  // 一边遍历一边更新 res
  }
  return res
  // return Math.max(...dp) 改在一边遍历的时候一边用res记录
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));