// tip: 添加一个虚拟头节点，便于处理删除头节点的问题
var deleteNode = function (head, val) {
  if (!head) return null

  let vHead = new ListNode(-1)
  vHead.next = head
  let cur = head, pre = vHead

  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
      return cur === head ? pre.next : head
    }

    cur = cur.next
    pre = pre.next
  }
  return head
};