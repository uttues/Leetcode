// 一维DP
var rob = function (nums) {
  let len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]
  let dp = nums.slice(0)

  dp[1] = Math.max(nums[0], nums[1])
  if (len >= 3) dp[2] = dp[0] + dp[2]
  for (let i = 3; i < len; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + dp[i]
  }
  return Math.max(...dp)  // 优化点：结果一定会在数组末尾出现
};

// 一维DP+滚动数组思想
var rob = function (nums) {
  let len = nums.length

  switch (len) {
    case 0: return 0
    case 1: return nums[0]
    case 2: return Math.max(nums[0], nums[1])
    case 3: return Math.max(nums[0] + nums[2], nums[1])
    default:
      let a = nums[0]
      let b = Math.max(nums[0], nums[1])
      let c = Math.max(nums[0] + nums[2], nums[1])
      let d
      for (let i = 3; i < len; i++) {
        d = Math.max(a, b) + nums[i]
        a = b
        b = c
        c = d
      }
      return Math.max(b, c)
  }
};

console.log(rob([1, 2, 3, 1]));


