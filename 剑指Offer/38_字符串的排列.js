// 38. 字符串的排列 https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/

var permutation = function (s) {
  let res = []
  let path = []

  var recursion = function (s) {
    if (!s) {
      res.push(path.join(''))
    } else {
      for (let i = 0, len = s.length; i < len; i++) {
        path.push(s[i])
        recursion(s.slice(0, i) + s.slice(i + 1))
      }
    }
    path.pop()
  }

  recursion(s)
  return Array.from(new Set(res))
};