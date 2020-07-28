// JavaScript
// tip: a.toString(num)，可以将数字a转化为字符串（进制num)
var hammingWeight = function (n) {
  let sum = 0
  Number(n).toString(2).split('').forEach(val => {
    if (val === '1') {
      sum++
    }
  })
  return sum
};



// 位运算：逐位判断
// n&1 表示除以2取余
var hammingWeight = function (n) {
  let sum = 0
  while (n) {
    if (n & 1) sum++
    n >>>= 1  // 无符号右移+赋值
  }
  return sum
}

// 位运算：巧用 n&(n-1)
// (n-1)：二进制数字 0 最右边的 1 变成 0 ，此 1 右边的 0 都变成 1 。 eg： 10101000 => 10100111
// n&(n-1)：效果相当于把二进制数字 n 最右边的 1 变成 0 ，其余不变。   eg: 10101000 => 10100000
// 循环执行 n&(n-1),最终n=0
var hammingWeight = function (n) {
  let sum = 0
  while (n) {
    n = n & (n - 1)
    sum++
  }
  return sum
}