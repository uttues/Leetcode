var reverseKGroup = function (head, k) {

  // 创建一个虚拟结点处理反转
  let vNode = new ListNode(0)
  vNode.next = head

  // 返回值：真实结点，可以直接用于拼接
  var recursion = function (subHead) {
    let pre = subHead

    // 判断是否剩下足够的结点（结点数>=k）：如果充足，则subHead为本轮反转后的局部头指针（返回出去）
    for (let i = 0; i < k; i++) {
      subHead = subHead.next
      if (!subHead) return pre.next
    }

    // 创建虚拟结点处理本层逻辑（指向后面剩下的链表，以免丢失）
    let vNode = new ListNode(0)
    vNode.next = subHead.next

    // 反转完成后pre会指向最后一次调换指针顺序的结点，即本轮反转后的局部头指针
    // tail:反转后链表的尾结点（也就是反转的第一个真实结点cur）
    let cur = pre.next, tail = cur, t
    while (pre !== subHead) {
      t = cur.next
      cur.next = pre
      pre = cur
      cur = t
    }
    tail.next = recursion(vNode)
    return subHead
  }

  return recursion(vNode)
};

