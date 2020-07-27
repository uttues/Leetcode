// 字符串分割，列表倒序（面试别这么写~）
var reverseWords = function (s) {
  let arr = s.split(' ').filter(value => value)
  return arr.reverse().join(' ')
};


var reverseWords = function (s) {
  let low = 0, end = s.length - 1

  // 手动去除首尾空格
  while (s[low] === ' ') low++
  while (s[end] === ' ') end--

  let high = low, arr = []

  while (high <= end) {
    while (high <= end & s[high] !== ' ') high++
    arr.unshift(s.slice(low, high))
    if (high <= end) {
      while (s[high] === ' ') high++
      low = high
    }
  }
  return arr.join(' ')
}
