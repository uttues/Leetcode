// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目

// 思路1：【移位计数】用 z&(z-1) 从右边开始逐个删1并计数
var hammingDistance = function (x, y) {
  let z = x ^ y, count = 0
  while (z) {
    if (z & 1) count++
    z >>>= 1
  }
  return count
};

// 思路2：【删1计数】用 z&(z-1) 从右边开始逐位检测
var hammingDistance = function (x, y) {
  let z = x ^ y, count = 0
  while (z) {
    z = z & (z - 1)
    count++
  }
  return count
};

// 思路3：递归+移位计数
var hammingDistance = function (x, y) {
  let count = 0
  if (!x || !y) {
    if (!x) {
      while (y) {
        y = y & (y - 1)
        count++
      }
    }
    if (!y) {
      while (x) {
        x = x & (x - 1)
        count++
      }
    }
    return count
  }

  if ((x & 1) ^ (y & 1)) return 1 + hammingDistance(x >>> 1, y >>> 1)
  else return hammingDistance(x >>> 1, y >>> 1)
};
console.log(hammingDistance(3, 1));