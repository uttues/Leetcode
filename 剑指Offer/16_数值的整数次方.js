// 剑指 Offer 16. 数值的整数次方 https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/

// var myPow = function (x, n) {
//   if (n === 0) return 1
//   if (n === 1) return x
//   if (n === -1) return 1 / x

//   if (n % 2 === 0) {
//     let recurRes = myPow(x, n / 2)
//     return recurRes * recurRes
//   } else {
//     let recurRes = myPow(x, (n - 1) / 2)
//     return recurRes * recurRes * x
//   }
// };


// 递归写法（分治|二分思想） 【错的】
// 优化点：
//  1.将n<0的情况放在顶层函数，避免递归中每次都需要比较(错误的方式，当负数取最小值2^31时有错误，因为正数最大是2^31-1)
//  2.位运算

// 递归写法 （二分思想）
var myPow = function (x, n) {
  if (x === 1) return 1
  if (n === 0) return 1
  if (n === 1) return x
  if (n === -1) return 1 / x

  if (n & 1) {
    let res = myPow(x, (n - 1) >> 1)
    return res * res * x
  }
  else {
    let res = myPow(x, n >> 1)
    return res * res
  }
}

// 非递归写法（二进制思想）
// 1.过滤掉一些特殊的情况，将负数的情况也转化为正数，进入循环
// 2.每轮x都会翻倍，但并不一定需要把x累乘进结果，根据二进制值判断【详细算法见（快速幂笔记） 】
// 3.坑:原本是用 n >>= 1 移位加速的，但是这种写法不能过 最小负数2-2147483648，改用 Math.floor(n/2)
var myPow = function (x, n) {
  if (x === 0) return 0
  if (x === 1 || n === 0) return 1
  return n > 0 ? circulate(x, n) : 1 / circulate(x, -n)
}
var circulate = function (x, n) {
  let res = n & 1 ? x : 1
  n = Math.floor(n / 2)
  while (n > 0) {
    x *= x
    if (n & 1) res *= x
    n = Math.floor(n / 2)
  }
  return res
}

console.log(myPow(2, 10));