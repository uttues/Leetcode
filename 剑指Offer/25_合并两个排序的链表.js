// 非递归
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {

  if (!l1 && !l2) return null

  let vHead = new ListNode(-1), p = vHead
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  p.next = l1 ? l1 : l2
  return vHead.next
};

// 递归
var mergeTwoLists = function (l1, l2) {
  // 递归终点：返回其中一个非空的
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};

