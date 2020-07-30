var countSubstrings = function (s) {
  if (!s) return 0
  let len = s.length
  let dp = new Array(len).fill(0).map(() => new Array(len)),
    res = 0
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < len; j++) {
      switch (j - i) {
        case 0:
          dp[i][i] = 1
          break
        case 1:
          dp[i][i + 1] = s[i] === s[i + 1]
          break
        default:
          if (j - i < 0) break
          dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
      }
      if (dp[i][j]) res++
    }
  }
  return res
};