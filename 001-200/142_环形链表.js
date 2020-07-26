var detectCycle = function (head) {
  if (!head) return null
  let fast = head, slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) {
      fast = head
      while (fast !== slow) {
        fast = fast.next
        slow = slow.next
      }
      return fast.val
    }
  }
  return null
};