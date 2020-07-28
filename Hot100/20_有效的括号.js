/**
 * @param {string} s
 * @return {boolean}
*/
var isValid = function (s) {
  let stack = [], len = s.length
  if (len & 1) return false
  let half = len >>> 1

  for (let i = 0; i < len; i++) {
    if (stack.length > half) return false

    c = s[i]
    if (c === ')' && stack.pop() !== '(') return false
    if (c === ']' && stack.pop() !== '[') return false
    if (c === '}' && stack.pop() !== '{') return false

    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    }
  }
  if (stack.length) return false
  return true
};

// 用 map，核心代码会好看一点
var isValid = function (s) {
  let stack = [], len = s.length
  if (len & 1) return false
  let half = len >>> 1
  let map = new Map()
  map.set(']', '[')
  map.set('}', '{')
  map.set(')', '(')

  for (let i = 0; i < len; i++) {
    if (stack.length > half) return false

    c = s[i]

    if (map.has(c)) {
      if (stack.pop() !== map.get(c)) return false
      continue
    } else {
      stack.push(c)
    }
  }
  if (stack.length) return false
  return true
};

console.log(isValid('()'));