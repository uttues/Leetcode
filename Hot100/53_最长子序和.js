var maxSubArray = function (nums) {
  let len = nums.length
  if (!len) return 0

  let dp = nums.slice(0)
  for (let i = 1; i < len; i++) {
    if (dp[i - 1] > 0) dp[i] = dp[i - 1] + dp[i]
  }
  return Math.max(...dp)
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));