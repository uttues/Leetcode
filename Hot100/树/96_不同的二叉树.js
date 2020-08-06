// 1.动态规划
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i >>> 1; j++) {
      dp[i] += (dp[j] * dp[i - 1 - j])
    }
    dp[i] *= 2
    if (i & 1) {
      dp[i] += dp[i >>> 1] * dp[i >>> 1]
    }
  }
  return dp[n]
};

// 2.卡特兰数
var numTrees = function (n) {
  let cur = 1 // C0
  for (let i = 1; i <= n; i++) {
    cur = 2 * (2 * (i - 1) + 1) * cur / (i + 1)
  }
  return cur
}