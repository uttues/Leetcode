var generateParenthesis = function (n) {
  const res = []  // 存放结果
  const path = [] // 路径记录（DP）
  const len = n * 2   // 字符串长度

  const recursion = function (c, left, right) {
    // 递归终点：左符号不能超过n个，右符号不能超过左符号
    if ((c === '(' && left === n) || (c === ')' && left === right)) return

    // 本层处理逻辑：不符合递归终点，添加入路径
    path.push(c)
    if (c === '(') left++
    else right++

    if (left + right === len) {
      res.push(path.join(''))
    } else {
      // 进入递归下层
      recursion('(', left, right)
      recursion(')', left, right)
    }

    // 清除递归记录
    path.pop()
  }

  recursion('(', 0, 0)
  return res
};

console.log(generateParenthesis(3));