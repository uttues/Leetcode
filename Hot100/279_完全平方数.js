var numSquares = function (n) {
  let dp = new Array(n + 1), j

  for (let i = 0; i <= n; i++) {
    dp[i] = i
    j = 2
    while (i - j * j >= 0) {
      dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
      j++
    }
  }

  return dp[n];
};