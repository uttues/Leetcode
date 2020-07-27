// 解法一：辅助栈
var reversePrint = function (head) {
  let stack = []  // 辅助栈
  let res = []
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  while (stack.length) {
    res.push(stack.pop())
  }
  return res
};

// 解法二：递归
var reversePrint = function (head) {
  let res = []

  var recur = function (node) {
    if (!node) return  // 递归终点
    recur(node.next)  // 递归进入下一层
    res.push(node.val)  // 回溯
  }

  recur(head)
  return res
}