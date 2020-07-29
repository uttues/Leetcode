// 一维DP+位运算相关
var countBits = function (num) {
  let dp = new Array(num + 1)
  dp[0] = 0
  for (let i = 1; i <= num; i++) {
    if (i & 1) dp[i] = dp[i - 1] + 1
    else dp[i] = i != 2 ? dp[i >>> 1] : 1
  }
  return dp
};
console.log(countBits(5));