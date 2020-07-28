// 双指针1
var reverseList = function (head) {
  if (!head) return null

  // 虚拟尾节点（只是为了好理解）
  let vTail = null, cur = head, pre = vTail, temp

  while (cur) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};

// 双指针2
var reverseList = function (head) {
  if (!head) return null

  let pre = head, cur = head.next
  while (cur) {
    head.next = cur.next
    cur.next = pre
    pre = cur
    cur = head.next
  }
  head = null
  return pre
}

// 递归
var reverseList = function (head) {
  if (!head) return null
  let temp

  var recursion = function (pre, cur) {
    if (!cur) return pre

    temp = cur.next
    cur.next = pre
    return recursion(cur, temp)
  }

  return recursion(null, head)
};