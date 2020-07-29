// 傻递归：效率巨低，时间复杂度指数级增长（恶魔递归树）
var climbStairs = function (num) {
  if (num <= 0) return 0
  if (num <= 2) return num

  return climbStairs(num - 1) + climbStairs(num - 2)
}

// 递归优化：用hashMap缓存递归结果，先获取后递归
var climbStairs = function (n) {
  let map = new Map()
  map.set(1, 1)
  map.set(2, 2)

  var recursion = function (num) {
    if (num <= 0) return 0
    if (map.has(num)) return map.get(num)

    let res = recursion(num - 1) + recursion(num - 2)
    map.set(num, res)
    return res
  }

  return recursion(n)
};

// 动态规划：打表
var climbStairs = function (n) {
  if (n <= 0) return 0
  if (n <= 2) return n

  let dp = new Array(n + 1)
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

// 动态规划+滚动数组思想：常数级变量存储临时结果 p、q、r 【秒】
// // 本质上打表也只用到了前一个元素，可以用常数级变量存储
var climbStairs = function (n) {
  if (n <= 3) return n
  let p = 2, q = 3, r
  for (let i = 4; i <= n; i++) {
    r = p + q
    p = q
    q = r
  }
  return r
}


console.log(climbStairs(3));