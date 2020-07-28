var firstUniqChar = function (s) {
  let map = new Map()
  let len = s.length
  for (let i = 0; i < len; i++) {
    // 1表示第一次出现，2表示多次出现
    if (map.get(s[i]) === 1) map.set(s[i], 2)
    else if (!map.has(s[i])) map.set(s[i], 1)
  }
  for (let i = 0; i < len; i++) {
    if (map.get(s[i]) === 1) return s[i]
  }
  return ' '
};