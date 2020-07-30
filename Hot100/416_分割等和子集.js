var canPartition = function (nums) {
  let len = nums.length
  let sum = nums.reduce((prev, val) => prev + val, 0)
  if (sum & 1) return false
  sum >>>= 1

  // dp[i][j] 表示在[0,i]中可以挑出和为j的元素
  let dp = new Array(len).fill(0).map(() => new Array(sum + 1).fill(false))
  for (let i = 0; i < len; i++) {
    dp[i][0] = true // 什么都不取
    for (let j = 1; j <= sum; j++) {
      // 只取自己一个
      if (j === nums[i]) dp[i][j] = true
      else {
        // 剩下两种情况：不取自己 || 取自己但还需要取别的（不论如何都依赖于i-1可取,i-1>0是前提）
        dp[i][j] = (i - 1) >= 0 && (dp[i - 1][j] || ((j - nums[i]) > 0 && dp[i - 1][j - nums[i]]))
      }
    }
  }
  return dp[len - 1][sum]
};