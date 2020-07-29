var maxProfit = function (prices) {
  let len = prices.length
  if (prices <= 1) return 0

  let dp = new Array(len).fill(0), maxIndex, max
  for (let i = 1; i < len; i++) {

    maxIndex = i
    max = 0
    for (let j = 0; j < i; j++) {
      if (prices[i] > prices[j]) {
        if (dp[j] + (prices[i] - prices[j]) >= max) {
          maxIndex = j
          max = dp[j] + (prices[i] - prices[j])
        }
      }
    }
    if (maxIndex !== i) dp[i] = max

  }
  return Math.max(...dp)
};